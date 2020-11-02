import { makeStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { orange, red } from '@material-ui/core/colors';

// start css --- TODO: parametrizzare con TailwindCSS
export const MaxiButtonASWA = withStyles((theme) => ({
    root: {
        width: 260,
        height: 120,
        fontSize: 56,
        color: theme.palette.getContrastText(orange[500]),
        backgroundColor: orange[500],
        '&:hover': {
            backgroundColor: orange[700],
        },
        margin: 10,
        marginTop: 100,
    },
}))(Button);
export const MidButtonASWA = withStyles((theme) => ({
    root: {
        width: 120,
        height: 80,
        fontSize: 28,
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
        margin: 10,
        marginTop: 60,
    },
}))(Button);
export const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
