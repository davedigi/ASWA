import React from 'react'
// eslint-disable-next-line no-unused-vars
import { makeStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { orange, red } from '@material-ui/core/colors';
import AvTimerIcon from '@material-ui/icons/AvTimer'


// start css --- TODO: parametrizzare con button.tsx
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

const item = {
    "id": "6a1b9efc-67d7-4033-a5ce-dfeafe3f1cf2",
    "finalPrice": null,
    "minOrderableQuantity": 5,
    "stockQuantity": 95,
    "metaFields": {
        "vdpStock": "flowers",
        "properties": {
            "stemHeight": 6
        },
        "initialStockQty": 95
    },
    "imageUrl": "https://pictures.flowerwebshop.net/pictures//X3286655_H_1.jpg",
    "availableQuantity": 95,
    "article": {
        "code": "2712",
        "item": {
            "slug": "droogbl-bewerkt-h",
            "translatedLabel": "Droogbloemen bewerkt H%"
        }
    }
}


export default function MediaCard() {
    const classes = useStyles();

    return (
        <div class="flex-column text-gray-700 text-center bg-green-300 px-4 py-2 m-2 max-w-xl rounded-lg overflow-hidden shadow-lg">
            <h1 className="text-2xl font-bold mb-3">
                {item.article.item.translatedLabel}
            </h1>
            <div class="flex-row">

                <div class="inline-block rounded-lg m-2 py-2 px-2 max-w-xs shadow-xs">
                    <img src={item.imageUrl} alt={item.article.item.translatedLabel} />
                </div>
                <div className="inline.block font-bold text-xl mb-3">
                    <span>Min price: </span>
                            € 12,34
                </div>
            </div>
            <div>
                Code: {item.id}
            </div>
            <div>
                <MidButtonASWA variant="contained" className={classes.button}
                    endIcon={<AvTimerIcon
                        style={{ fontSize: 40 }}>send
                      </AvTimerIcon>} >
                    SELL
                    </MidButtonASWA>
                <Button size="small" variant="outlined" color="primary" href="#outlined-buttons">
                    Edit
                </Button>
            </div>
        </div>
    );
}

