import React from 'react'
// eslint-disable-next-line no-unused-vars
import { makeStyles, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { orange, red } from '@material-ui/core/colors';
import AvTimerIcon from '@material-ui/icons/AvTimer'
// start css TODO parametizer
const MaxiButtonASWA = withStyles((theme) => ({
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
    },
}))(Button)

const MidButtonASWA = withStyles((theme) => ({
    root: {
        width: 120,
        height: 80,
        fontSize: 24,
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
        margin: 10,
    },
}))(Button);
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


export default function MediaCard() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
        ],
        data: [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34,
            },
        ],
    });
    return (
        <div class="flex max-w-3xl px-2 bg-teal-200">

            <div class="flex text-gray-700 text-center bg-green-300 px-4 py-2 m-2 max-w-2xl rounded-lg overflow-hidden shadow-lg">
                Next selling input
            </div>
                <Card class="flex-1 text-gray-700 text-center bg-green-300 px-4 py-2 m-2 max-w-2xl rounded-lg overflow-hidden shadow-lg">
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={state.imageUrl}
                            title={state.id}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {state.descr}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Code: {state.code}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <MidButtonASWA variant="contained" className={classes.button}
                            endIcon={<AvTimerIcon
                                style={{ fontSize: 40 }}>send
                      </AvTimerIcon>} >
                            SELL
                </MidButtonASWA>
                        <Button size="small" variant="outlined" color="primary" href="#outlined-buttons">
                            Edit
                </Button>
                    </CardActions>
                </Card>
        </div>
    );
}

