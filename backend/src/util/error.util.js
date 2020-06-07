module.exports =
	process.env.NODE_ENV === 'production'
		? (res, error, customeTitle = '') =>
				res.status(400).json({
					meta: {
						success: false,
						response: {
							title: customeTitle || error.title,
							message: error.message,
						},
					},
				})
		: (res, error, customeTitle) =>
				res.status(400).json({
					meta: {
						success: false,
						response: {
							title: customeTitle || error.title,
							message: error.stack.split('\n'),
						},
					},
				});
