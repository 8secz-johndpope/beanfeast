import React, { useRef, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ShareIcon from '@material-ui/icons/Share';
import { Notification } from '../../util';
import useStyles from './styles';

const sharePoolDetails = ({ poolId }) => {
	// return <Input value={`share url is: ${poolId}`} disabled fullWidth />

	const [notif, setNotif] = useState({ show: false, message: '', type: '' });
	const shareUrl = `${process.env.APP_URL}/pool/join/${poolId}`;
	const urlRef = useRef(null);
	const classes = useStyles();

	const handleClose = (e, reason?) => {
		if (reason === 'clickaway') {
			return;
		}
		setNotif({
			show: false,
			message: '',
			type: '',
		});
	};

	const copyToClipboard = () => {
		urlRef.current.select();
		document.execCommand('copy');

		setNotif({
			show: true,
			message: 'copied',
			type: 'success',
		});
	};

	const share = async () => {
		// await navigator.share({
		// 	url: shareUrl,
		// 	text: '',
		// 	title: '',
		// });
		// requires HTTPS
	};

	return (
		<Paper variant="outlined" className={classes.root}>
			<IconButton
				onClick={copyToClipboard}
				color="default"
				className={classes.iconButton}
				aria-label="directions"
			>
				<FileCopyOutlinedIcon />
			</IconButton>
			<Divider className={classes.divider} orientation="vertical" />
			<InputBase
				disabled
				className={classes.input}
				value={shareUrl}
				inputProps={{ style: { textAlign: 'center' } }}
			/>
			<Divider className={classes.divider} orientation="vertical" />
			<IconButton
				onClick={share}
				color="primary"
				className={classes.iconButton}
				aria-label="share"
			>
				<ShareIcon />
			</IconButton>
			<Notification
				{...{
					isOpen: notif.show,
					handleClose,
					message: notif.message,
					type: notif.type,
					hideAfter: 3000,
					showDismiss: false,
					position: { vertical: 'bottom', horizontal: 'center' },
					slideDirection: 'up',
				}}
			/>
			<input
				style={{
					opacity: 0,
					pointerEvents: 'none',
					position: 'absolute',
					left: '-1000px',
					top: '-1000px',
				}}
				ref={urlRef}
				value={shareUrl}
			/>
		</Paper>
	);
};

export default sharePoolDetails;
