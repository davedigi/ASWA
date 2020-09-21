import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { makeStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { orange, red } from '@material-ui/core/colors';
import AvTimerIcon from '@material-ui/icons/AvTimer'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import TextField from "@material-ui/core/TextField";

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
        fontSize: 28,
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


export default function AuctionOffProduct() {
    const classes = useStyles();
    const [running, setRunning] = useState(true);
    const [progress, setProgress] = useState(10);
    const [text, setText] = useState('gerbere');

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    function handleClick(val, step, msg) {
        console.log(val, step, msg)
        //   setCount(count + step);
        // alert(msg);
        setRunning((prevLoading) => !prevLoading);
    };

    const onChangeHandler = () => {
        console.log('pippo')
    }
    // onKeyDown(event) {
    //     if (event.keyCode === RETURN_KEY_CODE) {
    //         let text = event.target.value.trim();
    //         if (text == '') {
    //             return;
    //         }
    //         TodosStore.add(event.target.value.trim());

    //         // clear input
    //         event.target.value = '';
    //     }
    // }
    return (
        <div className="flex-column text-gray-700 text-center bg-green-300 px-4 py-2 m-2 max-w-2xl rounded-lg overflow-hidden shadow-lg">
            <form>
                <TextField
                    required
                    id="standard-required"
                    label="Required"
                    // defaultValue="Flower name"
                    value={item.article.item.translatedLabel}
                    onChange={onChangeHandler}
                />
            </form>
            <h1 className="text-2xl font-bold mb-3">
                {item.article.item.translatedLabel}
            </h1>
            <div>
                Code: {item.id}
            </div>
            {/* <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"> */}
            <div className="max-w-screen-xl mx-auto   lg:flex lg:items-center ">

                <div className="inline-block rounded-lg m-2 py-2 px-2 max-w-xs shadow-xs">
                    <img src={item.imageUrl} alt={item.article.item.translatedLabel} />
                </div>
                <div className="flex flex-col font-bold text-xl m-1 p-10">
                    <span>Min price: </span>
                    <span >€<input className="m-2" defaulvalue="12,34" /></span>
                    <Button size="small" variant="outlined" color="primary" href="#outlined-buttons">
                        Edit
                </Button>
                </div>
            </div>
            <div>
                <MidButtonASWA variant="contained" className={classes.button}
                    endIcon={<RotateRightIcon
                        style={{ fontSize: 50 }}>send
                      </RotateRightIcon>} >
                    UP
                </MidButtonASWA>
                <MaxiButtonASWA variant="contained" className={classes.button}
                    endIcon={<AvTimerIcon
                        style={{ fontSize: 50 }}>send
                      </AvTimerIcon>}
                    onClick={() => handleClick(1, 1, 'START Action Service Called')}>
                    {running ? 'STOP!' : 'START'}
                </MaxiButtonASWA>
            </div>
        </div>
    );
}

