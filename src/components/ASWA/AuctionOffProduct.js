import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { makeStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { orange, red } from '@material-ui/core/colors';
import AvTimerIcon from '@material-ui/icons/AvTimer'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import TextField from "@material-ui/core/TextField";
import Timer from "./Timer100"
import {IWatchStates, watchStates} from "./actionServices/TypesAuction"


// start css --- TODO: parametrizzare con TailwindCSS
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

/* const item = {
    "id": "G127",
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
} */


export default function AuctionOffProduct(props) {
    const classes = useStyles();
    const [running, setRunning] = useState(false);
    const [progress, setProgress] = useState(10);
    /*     const [preparedItem, setPreparedItem] = React.useState([     
            {"supplier": { id: 1, legalname: 'Floreal Garofalo', city: 'Pozzallo(RG)' }},
            {"product": { code: "G127", descr: "Droogbloemen bewerkt H%" }},
        ]) */
    const arr = Object.entries(props.preparedItem);
    console.log('preparedItem arr in entrata=', arr)
    const supplier = arr[0][1].supplier
    const flower = arr[1][1].product

    /*   const valids = voices.some(voice => voice.active);
        console.log(valids); // true */
    arr.forEach((element, index, array) => {
        console.log('che cosa =', index, element[1]);
        // console.log('all array elements ', array); // same myArray object 3 times
    });
    console.log("------------->", supplier.legalname)
    console.log("------------->", flower.code)

    useEffect(() => {
        console.log("AuctionOffProduct: useffect calling.")
        // const timer = setInterval(() => {
        //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        // }, 1800);
        // return () => {
        //     clearInterval(timer);
        // };
    }, []);

    function handleClick(val, step, msg) {
        console.log(val, step, msg)
        //   setCount(count + step);
        // alert(msg);
        switch (val) {
            case watchStates.START:
                setRunning((prevLoading) => !prevLoading);
                break;
            case watchStates.UP:
                alert(msg)
                break;

            default:
                break;
        }
    };

    const onChangeHandler = () => {
        console.log('onchangehandler')
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
                <div className="flex">
                    <div className="flex space-x-4 mr-20">

                        <div className="relative w-16 h-16">
                            <img className="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="supplier" />
                            <div className="absolute top-0 right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
                        </div>

                        <div >
                            <span className="block text-lg font-bold ml-1">
                                {supplier.legalname}
                            </span>
                            <span className="block text-base ml-0">
                                {supplier.city}
                            </span>
                        </div>
                    </div>
                    <div></div>
                    <div className="" >
                        <TextField className="text-3xl font-bold mb-3" 
                            required
                            id="standard-required"
                            label="Required"
                            // defaultValue="Flower name"
                            value={flower.descr}
                            onChange={onChangeHandler}
                        />
                        <div className="text-xl font-bold mb-2">
                            Code: {flower.code}
                        </div>
                    </div>
                </div>
                {/* <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"> */}
                <div className="max-w-screen-xl mx-auto   lg:flex lg:items-center ">

                    <div className="inline-block rounded-lg m-2 py-2 px-2 max-w-xs shadow-xs">
                        <img src={flower.imageUrl} alt={flower.descr} />
                    </div>

                    {(running ?
                        <span className="timer-font"><Timer loop={true} /></span>
                        :
                        <div className="flex font-bold text-xl m-1 p-10">
                            <span className="flex align-baseline">Min price: €</span>
                            <input className="flex w-12 m-2" value={flower.minprice} />
                            <button type="button" className=" bg-blue-200 hover:bg-blue-400 text-blue font-bold py-2 px-4 rounded-full" aria-label="Edit" onClick={() => handleClick(2, 1, 'EDIT Action Service Called')}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>)}
                </div>
                <div>
                    <MidButtonASWA variant="contained" className={classes.button}
                        endIcon={<RotateRightIcon
                            style={{ fontSize: 50 }}>send
                      </RotateRightIcon>}
                        onClick={() => handleClick(watchStates.UP, 1, 'START Action Service Called')}
                    >
                        UP
                    </MidButtonASWA>
                    <MaxiButtonASWA variant="contained" className={classes.button}
                        endIcon={<AvTimerIcon
                            style={{ fontSize: 50 }}>send
                      </AvTimerIcon>}
                        onClick={() => handleClick(watchStates.START, 1, 'START Action Service Called')}>
                        {running ? 'STOP!' : 'START'}
                    </MaxiButtonASWA>
                </div>
            </form>
        </div >
    );
}

