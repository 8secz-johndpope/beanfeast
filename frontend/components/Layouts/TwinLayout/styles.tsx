import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useTwinLayoutStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: '20px',
			marginTop: '30px',
		},
		header: {
			marginBottom: '20px',
		},
		verticalDivider: {
			height: 30,
			margin: '0px 20px',
		},
		horizontalDivider: {
			margin: '30px 0px',
			width: '100%',
		},
	})
);

export default useTwinLayoutStyles;