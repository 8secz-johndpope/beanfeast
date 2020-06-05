import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modifyRoot: {
			// boxShadow: 'none',
			// fontSize: 16,
			// padding: '6px 20px',
			borderRadius: '0px',
			// lineHeight: 1.5,
			// backgroundColor: '#1B98E0',
			// textTransform: 'uppercase',
			margin: '30px',
			padding: '10px 100px',
			'&:hover': {
				backgroundColor: '#1D6893',
			},
			'&:active': {
				boxShadow: 'none',
				backgroundColor: '#0062cc',
				borderColor: '#005cbf',
			},
			'&:focus': {
				boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
			},
		},
		updateRoot: {
			backgroundColor: '#080708',
			color: 'white',
			borderRadius: '0px',
			margin: '30px',
			padding: '10px 100px',
			'&:hover': {
				backgroundColor: '#575860',
			},
			'&:active': {
				boxShadow: 'none',
				backgroundColor: '#0062cc',
				borderColor: '#005cbf',
			},
			'&:focus': {
				boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
			},
		},
	})
);

export default useStyles;
