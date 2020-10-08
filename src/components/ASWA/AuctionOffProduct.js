import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { orange, red } from '@material-ui/core/colors';
import AvTimerIcon from '@material-ui/icons/AvTimer'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import TextField from "@material-ui/core/TextField";
import Timer from "./Timer100"
import { IClockStates, clockStates } from "./actionServices/TypesAuction"
import StartAuction from './actionServices/StartAuction';
import StopAuction from './actionServices/StopAuction';


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
    const classes = useStyles()
    const [running, setRunning] = useState(false)
    const [clkState, setClkState] = useState(clockStates.IDLE)
    const [displayState, setDisplayState] = useState(clockStates.START)
    const [drand, setDrand] = useState(0)

    /*     const [preparedItem, setPreparedItem] = React.useState([     
            {"supplier": { id: 1, legalname: 'Floreal Garofalo', city: 'Pozzallo(RG)' }},
            {"product": { code: "G127", descr: "Droogbloemen bewerkt H%" }},
        ]) */
    const arr = Object.entries(props.preparedItem);
    // console.log('preparedItem arr in entrata=', arr)
    const supplier = arr[0][1].supplier
    const flower = arr[1][1].product

    /*   const valids = voices.some(voice => voice.active);
        console.log(valids); // true */
    arr.forEach((element, index, array) => {
        // console.log('che cosa =', index, element[1]);
        // console.log('all array elements ', array); // same myArray object 3 times
    });
    // console.log("------------->", supplier.legalname)
    // console.log("------------->", flower.code, flower.imageurl)
    // let str = "../../" + flower.imageurl
    const imgURI = flower.imageurl
    // console.log(imgURI)


    useEffect(() => {

        console.log("USEFFECT Automa da STATO:", clkState)

        switch (clkState) {
            case clockStates.START:
                console.log('USEFFECT --> stato=', clockStates.STOP)
                setClkState(clockStates.STOP)
                setDisplayState(clockStates.STOP)
                setRunning(true);
                break;
            case clockStates.UP:
                console.log('USEFFECT --> stato=', clockStates.STOP)
                setClkState(clockStates.STOP)
                setDisplayState(clockStates.STOP)
                setRunning(true);
                break;
            case clockStates.STOP:
                console.log('USEFFECT --> stato=', clockStates.CANCELLED)
                setClkState(clockStates.CANCELLED)
                setDisplayState(clockStates.CANCELLED)
                setRunning(false);
                break;
            case clockStates.CANCELLED:
                console.log('USEFFECT --> stato=', clockStates.IDLE)
                setClkState(clockStates.IDLE)
                setDisplayState(clockStates.CANCELLED)
                setRunning(false);
                break;
            case clockStates.IDLE:
                console.log('USEFFECT --> stato=', clockStates.START)
                setClkState(clockStates.START)
                setDisplayState(clockStates.START)
                setRunning(false);
                break;
            default:
                setClkState(clockStates.IDLE)
                setDisplayState('ERROR')
                setRunning(false);
                break;
        }
        // const timer = setInterval(() => {
        //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        // }, 1800);
        // return () => {
        //     clearInterval(timer);
        // };
    }, []);

    function handleClick(state, step, msg) {
        console.log("handleClick", msg)
        const rand = 1 + Math.random() * (60);
        setDrand(Math.round(rand));

        switch (state) {
            case clockStates.START:
                console.log("Automa da STATO: ", state, ' --> ', clockStates.STOP)
                setClkState(clockStates.STOP)
                setDisplayState(clockStates.STOP)
                setRunning(true);
                break;
            case clockStates.UP:
                console.log("Automa da STATO: ", state, ' --> ', clockStates.STOP)
                setClkState(clockStates.STOP)
                setDisplayState(clockStates.STOP)
                setRunning(true);
                break;
            case clockStates.STOP:
                console.log("Automa da STATO: ", state, ' --> ', clockStates.CANCELLED)
                setClkState(clockStates.CANCELLED)
                setDisplayState(clockStates.CANCELLED)
                setRunning(false);
                break;
            case clockStates.CANCELLED:
                console.log("Automa da STATO: ", state, ' --> ', clockStates.IDLE)
                setClkState(clockStates.IDLE)
                setDisplayState(clockStates.START)
                setRunning(false);
                break;
            case clockStates.IDLE:
                console.log("Automa da STATO: ", state, ' --> ', clockStates.STOP)
                setClkState(clockStates.STOP)
                setDisplayState(clockStates.STOP)
                setRunning(true);
                break;
            default:
                setClkState(clockStates.IDLE)
                setDisplayState('ERROR')
                setRunning(false);
                break;
        }
    }

    const onChangeHandler = (event) => {
        console.log('onchangehandler', event)
        alert('rand=', drand)
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
        <div className="flex-column w-50 min-w-0 max-w-2xl text-gray-700 text-center bg-green-300 px-4 py-2 m-2  rounded-lg overflow-hidden shadow-lg">
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
                <div className="flex max-w-sm mx-auto mt-8 pr-2">

                    <div className="inline-block rounded-xl shadow-lg ml-2 py-2 px-2 ">
                        {/* <img classNames="h-10" src={"https://upload.wikimedia.org/wikipedia/commons/7/76/Magnolia_liliiflora3.jpg"} alt={flower.descr} /> */}
                        <img className="sm:w-64 w-56" src={imgURI} alt={flower.descr} />
                    </div>

                    {running && clkState === clockStates.STOP && <StartAuction rand={drand} clkState={clkState} spin={drand} />}
                    {!running && clkState === clockStates.CANCELLED && <StopAuction rand={drand} clkState={clkState} />}

                    <div className="">
                        <div className="inline-block font-bold  m-1 ">
                            <span className="text-lg">Min price: €</span>
                            <span className="text-2xl w-4 m-1 h-4">12.34</span>
                            <button
                                type="button"
                                className="bg-blue-300 hover:bg-blue-400 text-blue font-bold py-3 align-text-top ml-1 px-3 rounded-full"
                                aria-label="edit"
                                onClick={() => onChangeHandler("EDIT Action Service Called")}
                            >
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div className="inline-block font-bold m-1 ">
                            <span className="text-lg">suggested: €</span>
                            <span className="text-2xl w-4 m-1 h-4">16.55</span>
                            <span aria-hidden="true"></span>
                        </div>
                        <div className="font-bold text-xl mt-4 ">
                            <span className="mr-2">Spin</span>
                            <select><option>{drand}</option></select>
                        </div>
                    </div>
                    }
                </div>
                <div>
                    <MidButtonASWA variant="contained" className={classes.button}
                        value={clkState}
                        endIcon={<RotateRightIcon
                            style={{ fontSize: 50 }}>send
                      </RotateRightIcon>}
                        onClick={() => handleClick(clockStates.UP, 1, ' Action Service Called')}
                    >
                        UP
                    </MidButtonASWA>

                    <MaxiButtonASWA variant="contained" className={classes.button}
                        value={clkState}
                        endIcon={<AvTimerIcon
                            style={{ fontSize: 50 }}>send
                      </AvTimerIcon>}
                        onClick={() => handleClick((clkState), 1, ' Action Service Called')}>
                        {displayState}
                    </MaxiButtonASWA>
                </div>
            </form>
        </div >
    );
}

