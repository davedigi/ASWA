import React, { useState, useEffect } from 'react'
import AvTimerIcon from '@material-ui/icons/AvTimer'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import { IClockStates, clockStates, ClockWinnerState, SocketType } from "./actionServices/TypesAuction"
import StartAuction2 from './actionServices/StartAuction2'
import StopAuction from './actionServices/StopAuction'
import DownAuction from './actionServices/DownAuction'
import DisplayGDD from './actionServices/DisplayGDD'
import { H2 } from '../shared/SharedStyleComponents'
import WebSocketClock from '../../Hooks/WebSocketClock'
import { useStyles, MidButtonASWA, MaxiButtonASWA } from '../shared/MaxiButtonASWA';
import { SupplierFmt } from './SupplierFmt'
import { CREATE_TRANSACTION } from './store/types'
import { useSelector, useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { createTransDB, createTransactions, create_transaction } from './store/TransactionReducer'
import { FlowerDescr } from './FlowerDescr'

export const AuctionOffProduct = (props) => {
    const classes = useStyles()
    const [running, setRunning] = useState(false)
    const [clkState, setClkState] = useState(clockStates.IDLE)
    const [displayState, setDisplayState] = useState(clockStates.START)
    const [displayGDD, setDisplayGDD] = useState(false)
    const [clockwiseBtn, setclockwiseBtn] = useState(false)
    const [clockParams, setClockParams] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)

    const writeTrans = useSelector(createTransactions)
    const dispatch = useDispatch();

    const dispatchCreateTrans = async (payload) => {

        /*         dispatch(create_transaction({ type: CREATE_TRANSACTION, payload: payload }))
                    .then(unwrapResult)
                    .then(result => {
                        console.log('WRITE CREATE_TRANSACTIONE DONE! res:', result);
                        return result.data;
                    })
                    // .catch(serializedError => {
                    //     console.log('error!!:', serializedError);
                    .catch(error => {
                        console.log('error!!:', error);
                    }) */

        createTransDB({ type: CREATE_TRANSACTION, payload: payload })
    }
    /*     const [preparedItem, setPreparedItem] = React.useState([     
        {"supplier": { id: 1, legalname: 'Floreal Garofalo', city: 'Pozzallo(RG)' }},
        {
            "product": {
                id: 1,
                code: "G127",
                descr: "Gerbere Milanesi ",
                size: "gambo lungo",
                // imageurl:"assets/products/gerbere-milanesi.jpg",
                imageurl: "/gerbere-milanesi.jpg",
                minprice: 1020,
                suggestedprice: 1267
            }
        },
    ]) */
    const arr = Object.entries(props.preparedItem);
    // console.log('[AUCTIONOFF] preparedItem arr in entrata=', arr)
    const supplier = arr[0][1].supplier
    const flower = arr[1][1].product

    /*   const valids = voices.some(voice => voice.active);
        console.log(valids); // true */
    arr.forEach((element, index, array) => {
        // console.log('che cosa =', index, element[1]);
        // console.log('all array elements ', array); // same myArray object 3 times
    });
    // console.log("[AUCTIONOFF] -->", supplier.legalname)
    // console.log("[AUCTIONOFF] -->", flower.code, flower.imageurl)
    // let str = "../../" + flower.imageurl
    const imgURI = flower.imageurl
    const fldescr = flower.descr + ' ' + flower.size

    const [stateT, setStateT] = React.useState({
        flowerCode: flower.code,
        flowerDescr: fldescr,
        supplierCode: supplier.id,
        supplierDescr: supplier.legalname,
        minpriceedit: false,
        minpricedel: false,
        imageurl: imgURI
    })

    useEffect(() => {
        localStorage.setItem("CLOCK_START_PRODUCT", JSON.stringify(flower))
        localStorage.setItem("CLOCK_START_SUPPLIER", JSON.stringify(supplier))

        console.log("[AUCTIONOFF] USEEFFECT per localStorage")

        // const timer = setInterval(() => {
        //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        // }, 1800);
        // return () => {
        //     clearInterval(timer);
        // };
    }, [flower, supplier]);

    // CLOCK ERROR HANDLE
    useEffect(() => {
        console.info("[AUCTIONOFF] USEEFFECT per setRunning a ")
        if (errorMessage) {
            setRunning(false)
            console.info("false")
            setClkState(clockStates.CANCELLED)
        } else {
            console.info(running)
        }
    }, [errorMessage, running])

    const handleClick = ((mystate, transaction, msg) => {
        console.log("[AUTOMA A STATI FINITI][handleClick]", mystate, transaction, msg)
        // const rand = 1 + Math.random() * (60)
        const rand = 30 // DEBUG TODO

        switch (mystate) {
            case clockStates.IDLE:
                console.log("[AUTOMA A STATI FINITI] Automa da STATO: ", mystate, ' --> ', clockStates.STOP)
                setClkState(clockStates.STOP)
                setErrorMessage(null)
                setDisplayState(clockStates.STOP)
                setRunning(true);
                break;
            case clockStates.START:
                if (clockParams.spin) {
                    setErrorMessage(null)
                    console.log("[AUTOMA A STATI FINITI] Automa da STATO: ", mystate, ' --> ', clockStates.STOP)
                    setClkState(clockStates.STOP)
                    setDisplayState(clockStates.STOP)
                    setDisplayGDD(false)
                    setRunning(true);
                }
                setclockwiseBtn(false)
                break;
            case clockStates.UP:
                setErrorMessage(null)
                setclockwiseBtn(true)
                console.log("[AUTOMA A STATI FINITI] Automa da STATO: ", mystate, ' --> ', clockStates.DOWN)
                setClkState(clockStates.DOWN)
                setDisplayState(clockStates.DOWN)
                setDisplayGDD(false)
                setRunning(true);
                break;
            case clockStates.DOWN:
                console.log("[AUTOMA A STATI FINITI] Automa da STATO: ", mystate, ' --> ', clockStates.STOP)
                setClkState(clockStates.STOP)
                setDisplayState(clockStates.STOP)
                setDisplayGDD(false)
                setRunning(true);
                break;
            case clockStates.STOP:
                console.log("[AUTOMA A STATI FINITI] Automa da STATO: ", mystate, ' --> ', clockStates.CANCELLED)
                setClkState(clockStates.CANCELLED)
                setDisplayState(clockStates.CANCELLED)
                setDisplayGDD(false)
                setRunning(false);
                break;
            case clockStates.CANCELLED:
                setErrorMessage(null)
                // {"id":1,"code":"G127","descr":"Gerbere Milanesi ","size":"gambo lungo","imageurl":"/gerbere-milanesi.jpg","minprice":1020,"suggestedprice":1267}
                const payload = {
                    "supplier": localStorage.getItem('CLOCK_START_SUPPLIER'),
                    "product": localStorage.getItem('CLOCK_START_PRODUCT'),
                    "buyer": msg.buyer > 0 ? msg.buyer : '0',
                    "price": msg.price ? msg.price : '0',
                    "state": ClockWinnerState.REGISTERED
                }
                switch (transaction) {
                    case ClockWinnerState.REGISTERED:
                        payload.state = ClockWinnerState.REGISTERED
                        console.log('payload REGISTERED:', payload)
                        dispatchCreateTrans(payload);
                        setErrorMessage(`CALLED ACTION for ${transaction} BUYER ${msg.buyer}`)
                        break;
                    case ClockWinnerState.CANCELLED:
                        payload.state = ClockWinnerState.CANCELLED
                        setErrorMessage(`CALLED ACTION for ${transaction} BUYER ${msg.buyer}`)
                        console.log('payload REGISTERED:', payload)
                        dispatchCreateTrans(payload);
                        break;
                    default:
                        // setErrorMessage(`Invalid ACTION for TRANSACTION:${transaction}`)
                        break;
                }
                setclockwiseBtn(false)
                console.log("[AUCTIONOFF] Automa da STATO: ", mystate, ' --> ', clockStates.IDLE)
                setClkState(clockStates.IDLE)
                setDisplayState(clockStates.START)
                setRunning(false);
                break;
            case clockStates.COMPLETED:
                setclockwiseBtn(false)
                console.log("[AUCTIONOFF] Automa da STATO: ", mystate, ' --> ', clockStates.COMPLETED)
                setClkState(clockStates.COMPLETED)
                setDisplayState(clockStates.COMPLETED)
                setRunning(false);
                break;
            default:
                setClkState(clockStates.IDLE)
                setDisplayState('ERROR')
                setRunning(false);
                break;
        }
        setClockParams({
            clkState: clkState,
            spin: rand,
            clockwise: clockwiseBtn,
            startPrice_cent: rand * 100,
            // minPrice_cent: (flower.minprice,
            minPrice_cent: Math.round((rand * 65)),  // DEBUG, TODO
            speed_ms: 20,
            tailSize: 10
        })

        // console.log("[AUCTIONOFF] setClockParams=", clockParams)
    })

    /* YOU CAN'T DO THIS: 
       <button onClick={removeBill(index)}>𝗫</button>
       because the expression inside onClick is going to be executed on mount.This is going to delete all the bills in the list, as soon as the app is started.
    
       Instead, this is what YOU NEED TO DO, using arrow functions:
       <button onClick={() => removeBill(index)}>𝗫</button>
     */
    const onChangeHandler = (event) => {
        console.log("[AUCTIONOFF] onChangeHandler trap event.target.id onChangeHandler=", event.target.id)
        localStorage.setItem("CLOCK_START_PRODUCT", JSON.stringify(stateT))
        localStorage.setItem("CLOCK_START_SUPPLIER", JSON.stringify(supplier))
        const { id, value } = event.target
        setStateT(prevState => ({
            ...prevState,
            [id]: value
        }))
        // setState(state.supplierDescr, supplier.legalname)
        // setState(state.imageurl, imgURI)
        if (event.target.id === "minpriceedit") setDisplayGDD(true)
        else setDisplayGDD(false)
    }

    const onBlurHandler = (event) => {
        console.log("[AUCTIONOFF] trap event.target.id onChangeHandler=", event.target.id)
        if (event.target.id === "flowerDescr") setDisplayGDD(true)
        else setDisplayGDD(false)
    }

    const onKeyDown = (event) => {

        if (event.keyCode === "PageDown") {
            console.log("[AUCTIONOFF] trap event.target.id ONkeyDOWN=", event.target.id)

        }

        if (event.keyCode === "Enter") {
            console.log("[AUCTIONOFF] trap event.target.id ONkeyDOWN=", event.target.id)
            let text = event.target.value.trim();
            if (text == '') {
                return;
            }
            // clear input
            event.target.value = '';
        }
    }
    const imgsup = "https://randomuser.me/api/portraits/women/" + (clockParams.spin ? clockParams.spin : 1) + ".jpg"
    return (
        <div className="max-w-xl px-4 py-2 m-1 overflow-hidden text-center text-gray-700 bg-green-300 rounded-lg shadow-lg flex-column min-w-sm">
            <form>
                <div className="flex">
                    <div className="flex mr-10 space-x-4 ">
                        <SupplierFmt imgsup={imgsup} supplier={supplier} />
                    </div>
                    {/* <div className="w-10"></div> */}
                    <div className="max-w-sm min-w-full md:flex-shrink-0 " >
                        <FlowerDescr flowerDescr={stateT.flowerDescr}
                            onBlurHandler={onBlurHandler}
                            onChangeHandler={onChangeHandler}
                            onKeyDown={onKeyDown} >
                        </FlowerDescr>
                        <div className="flex justify-start mb-2 text-xl font-bold align-bottom">
                            <span className="h-5 text-lg align-text-bottom ">Code:
                                </span>
                            <input type="text"
                                id="flowerCode"
                                // placeholder={flower.code}
                                className="w-20 px-2 py-1 m-1 leading-4 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                aria-describedby="flowerCodeHelp"
                                value={stateT.flowerCode || ''}
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"> */}
                <WebSocketClock onChange={handleClick}
                    clkState={clkState}
                    // clockParams={clockParams}
                    // showError={setErrorMessage}
                    running={running}
                />
                <div className="flex max-w-sm pr-2 mx-auto mt-8 ">
                    <div className="inline-block px-2 py-2 ml-2 rounded-xl ">
                        {/* <img className="w-56 sm:w-64" src={imgURI} alt={flower.descr} /> */}
                        <img className="object-cover w-56 sm:w-64" src={imgURI} alt={flower.descr} />
                        {/* <div>test UP={(clockwiseBtn) ? 'true' : 'false'}</div> */}
                    </div>
                    {running
                        && ((clkState === clockStates.STOP))
                        && (!clockwiseBtn)
                        && <StartAuction2 onChange={handleClick}
                            clkState={clkState}
                            clockParams={clockParams}
                            showError={setErrorMessage}
                        />
                    }
                    {running
                        && ((clkState === clockStates.DOWN))
                        && (clockwiseBtn)
                        && <StartAuction2 onChange={handleClick}
                            clkState={clkState}
                            clockParams={clockParams}
                            showError={setErrorMessage}
                        />
                    }
                    {running
                        && (clkState === clockStates.STOP)
                        && (clockwiseBtn)
                        && <DownAuction onChange={handleClick}
                            clkState={clkState}
                            clockParams={clockParams}
                            showError={setErrorMessage}
                        />
                    }
                    {!running
                        && clkState === clockStates.CANCELLED
                        && <StopAuction />
                    }
                    {!running
                        && displayGDD
                        && <DisplayGDD state={stateT}
                            showError={setErrorMessage}
                        />
                    }
                    {!running &&
                        <div className="">
                            <div className="inline-block m-1 font-bold ">
                                <span className="text-lg">Min price: €</span>
                                <span className="w-4 h-4 m-1 text-2xl">{flower.minprice}</span>
                                <button
                                    type="button"
                                    id="minpriceedit"
                                    className="px-2 py-2 ml-1 font-bold align-text-top bg-blue-300 rounded-full hover:bg-blue-400 text-blue"
                                    aria-label="edit"
                                    onClick={(e) => onChangeHandler(e)}
                                >
                                    <span aria-hidden="true"></span>
                                </button>
                                <button
                                    type="button"
                                    id="minpricedel"
                                    className="inline-block px-2 py-2 ml-1 font-bold text-black align-text-top bg-red-400 rounded-full hover:bg-red-500"
                                    aria-label="close"
                                    onClick={(e) => onChangeHandler(e)}
                                >
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="inline-block m-1 font-bold ">
                                <span className="text-lg">suggested: €</span>
                                <span className="w-4 h-4 m-1 text-2xl">{flower.suggestedprice}</span>
                                <span aria-hidden="true"></span>
                            </div>
                            <div className="mt-2 text-xl font-bold ">
                                <span className="mr-2">Spin</span>
                                <select><option>{clockParams.spin}</option></select>
                            </div>
                        </div>
                    }
                </div>
                <div className="">
                    <MidButtonASWA variant="contained" className={classes.button}
                        disabled={running && clockwiseBtn}
                        value={clockwiseBtn}
                        endIcon={<RotateRightIcon
                            style={{ fontSize: 50 }}>send
                      </RotateRightIcon>}
                        onClick={() => handleClick(clockStates.UP, 1, ' UP click Action called')}
                    >
                        UP
                    </MidButtonASWA>

                    <MaxiButtonASWA variant="contained" className={classes.button}
                        // disabled={running}
                        value={clkState}
                        endIcon={<AvTimerIcon
                            style={{ fontSize: 50 }}>send
                      </AvTimerIcon>}
                        onClick={() => handleClick((clkState), 1, 'START/STOP/DOWN click Action Called')}>
                        {displayState}
                    </MaxiButtonASWA>
                </div>
            </form>
            <h1 className="px-6 mb-2 font-black text-red-700 transform bg-gray-500 bg-opacity-75 rounded shadow w-100 modal ">{errorMessage}</h1>
            {/* <H2 >{errorMessage}</H2> */}
            {/* close for testing */}
            {/* <span className="absolute px-4 pt-4 pin-t pin-r" >
                <svg className="w-6 h-6 text-grey hover:text-gray-600" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span > */}
            {/* <h1 className="relative z-10 px-12 py-6 mb-4 font-extrabold text-red-700 bg-gray-500 bg-opacity-75 rounded shadow">{errorMessage}</h1> */}
            {/*      <transactionContext.Provider
        value={{
            transactions: state.transactions,
            createTransaction
        }}>

    </transactionContext.Provider>         
 */}    </div >
    )
}
export default AuctionOffProduct