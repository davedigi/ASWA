import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { makeStyles, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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


export default function ProductCard() {
    const classes = useStyles();
    const [state, setState] = useState({
        columns: [
            { title: 'Descr', field: 'descr' },
            { title: 'Code', field: 'code', type: 'numeric' },
            {
                title: 'Minimum Price',
                field: 'min_price',
                // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
            { title: 'Url immagine', field: 'imageUrl', },
        ],
        data: [
            { descr: 'Rosa tros Azore', code: 12383, min_price: 2.34, imageUrl: 'https://pictures.flowerwebshop.net/pictures//X3286655_H_1.jpg' },
            { descr: 'Gerbera ', code: 72373, min_price: 4.62, imageUrl: 'https://pictures.flowerwebshop.net/pictures//X3286655_H_1.jpg' },
        ],
    });
    return (
        <div className="flex max-w-3xl px-2 bg-teal-200">
            <Card className="flex-1 text-gray-700 text-center bg-green-300 px-4 py-2 m-2 max-w-2xl rounded-lg overflow-hidden shadow-lg">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={state.data[0].imageUrl}
                        title={state.data[0].descr}
                    />
                    <CardContent>
                        <div className="flex-col">

                            <span className="block text-2xl font-bold mb-3">
                                {state.data[0].descr}
                            </span>
                            <span className="block text-xl mb-3">
                                {state.columns[1].title}: {state.data[0].code}
                            </span>
                            <span className="block text-xl mb-3">
                                {state.columns[2].title}: {state.data[0].min_price} €
                            </span>
                        </div>
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

