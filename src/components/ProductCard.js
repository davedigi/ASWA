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


// export default function ProductCard() {
const ProductCard = () => {
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
                        <div className="flex p-4 border-t border-gray-300 text-gray-700">
                            <div className="flex-1 inline-flex items-center">
                                <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                                </svg>
                                <p><span className="text-gray-900 font-bold">3</span> Bedrooms</p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                                <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                                </svg>
                                <p><span className="text-gray-900 font-bold">2</span> Bathrooms</p>
                            </div>
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


export default ProductCard