var PoolService = require('../services/pool.service');
var SessionService = require('../services/session.service');
var handleError = require('../util/error.util');

const createPool = async (req, res, next) => {
	const {
		fromTime = Date.now(),
		toTime = Date.now(),
		maxPeople = Infinity,
		latitude,
		longitude,
		uniqueIdentifier,
		queryString,
		searchRadius,
	} = req.query;

	try {
		const newPool = await PoolService.createNewPool({
			fromTime,
			toTime,
			maxPoolSize: maxPeople,
			uniqueIdentifier,
			queryString,
			searchRadius,
		});
		const { newSession, updatedPool } = await SessionService.createNew({
			pool: newPool,
			latitude,
			longitude,
			uniqueIdentifier,
		});
		return res.status(200).json({
			status: 200,
			data: { newSession, updatedPool },
			message: 'Pool created succesfully',
		});
	} catch (e) {
		return handleError(res, e);
	}
};

const updatePool = async (req, res, next) => {
	const { fromTime, toTime, maxPeople, uniqueIdentifier, queryString, searchRadius } = req.query;
	const { poolId } = req.params;

	try {
		if (!poolId) {
			throw new Error('Incomplete joining URL');
		}
		const newPool = await PoolService.updatePool({
			poolId,
			fromTime,
			toTime,
			maxPoolSize: maxPeople,
			uniqueIdentifier,
			queryString,
			searchRadius,
		});
		return res
			.status(200)
			.json({ status: 200, data: newPool, message: 'Pool updated succesfully' });
	} catch (e) {
		return handleError(res, e);
	}
};

const joinPool = async (req, res, next) => {
	const { uniqueIdentifier, latitude, longitude } = req.query;
	const { poolId } = req.params;
	try {
		if (!uniqueIdentifier) {
			throw new Error('Anonymous device hash is required to register into the pool');
		} else if (!latitude || !longitude) {
			throw new Error('Location is null');
		} else if (!poolId) {
			throw new Error('Incomplete joining URL');
		}
		const newSession = await SessionService.addToPool({
			poolId,
			uniqueIdentifier,
			latitude,
			longitude,
		});
		return res.status(200).json({
			status: 200,
			data: newSession,
			message: `Joined the Pool ${poolId} succesfully`,
		});
	} catch (e) {
		return handleError(res, e);
	}
};

const PoolController = {
	createPool,
	updatePool,
	joinPool,
};

module.exports = PoolController;
