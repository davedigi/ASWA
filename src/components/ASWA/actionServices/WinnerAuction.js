import React, { useState, useEffect } from 'react'
import { Alert } from '../../shared/Alert';
import { IClockStates, clockStates } from "./TypesAuction"

export const WinnerAuction = (props) => {

   const { SaleBtn, CancelBtn, RebidBtn } = ASWAButton(props);
   const [show, setShow] = useState(false)

   const ClockWinnerState = {
      PENDING: 'PENDING',
      CANCELLED: 'CANCELLED',
      REGISTERED: 'REGISTERED'
   }

   const SocketType = {
      WINNER: 'WINNER',
      INIT: 'INIT'
   }

   // ✅ ES6 Way
   function formatCurrencyEUR(price) {
      const money = price / 100;
      const value = new Intl.NumberFormat('it-IT',
         { style: 'currency', currency: 'EUR' }
      ).format(money);
      return value;
   }

   /* TODO escape string in input with backslashes, otherwise cant do the right parsing */
   function getFieldInJsonString(index, str, test) {
      let arr = str.split(',');
      const temp = (arr[index].split(':')[1]);
      test = temp.slice(1, temp.length - 1);
      // console.log('getFieldInJsonString found==', test);
      return test;
   }

   function ASWAButton(props) {
      const RebidBtn = (props) => (
         <button className="flex-1 px-6 py-4 ml-2 font-bold text-gray-900 bg-gray-100 border-b-2 rounded md:flex-none border-red hover:bg-red-100"
            id="rebidbtn"
            onClick={props.oncli}
         >
            REBID
         </button>
      );

      const CancelBtn = (props) => (
         <button className="flex-1 flex-none px-6 py-4 ml-2 font-bold text-gray-900 bg-gray-100 border-b-2 rounded border-red hover:bg-red-100"
            id="cancelbtn"
            onClick={props.oncli}
         >
            CANCEL
         </button>
      );

      const SaleBtn = (props) => (
         <button className="flex-1 flex-none px-6 py-4 ml-2 font-bold text-gray-900 bg-gray-100 border-b-2 rounded border-green hover:bg-green-100"
            id="salebtn"
            onClick={props.oncli}
         >
            SALE
         </button>
      );
      return { SaleBtn, CancelBtn, RebidBtn };
   }

   function TheWinnerIs(props) {

      console.log('[TheWinnerIs] props=', props)
      // if (props.websocket.socketType !== SocketType.WINNER) {
      // if (!show) {
      //    console.log('nessuna renderizzazione Winner')
      //    return null
      // }

      let buyer = ""
      let price = ""
      let socketType = ""
      let clockWinnerState = "" //TODO - capire perchè non funziona
      if (props.websocket) {
         // setShow(true)
         socketType = getFieldInJsonString(1, props.websocket, socketType);
         clockWinnerState = getFieldInJsonString(4, props.websocket, clockWinnerState);

         console.log('VADO a renderizzazione Winner:', socketType)
         // TODO gestire "VENDITA NULLA"
         // if (socketType === SocketType.WINNER && clockWinnerState === ClockWinnerState.PENDING) {
         if (socketType === SocketType.WINNER) {
            // if (props.websocket.indexOf('[WS BACKEND]') === -1) {
            price = getFieldInJsonString(2, props.websocket, price);
            buyer = getFieldInJsonString(3, props.websocket, buyer);

         } else {
            // CANCELLED FROM CLOCK
            buyer = 0
            console.error('[WINNER AUCTION] socketType:', socketType)
         }
      }

      const handleClickRebid = (e) => {
         e.preventDefault();
         console.log('[handleClickRebid] props=', props.oncha)
         // setShow(false)
         props.oncha(clockStates.CANCELLED, ClockWinnerState.PENDING, 'REBID from auctioner Action Called');
      }

      const handleClickCancel = (e) => {
         e.preventDefault();
         console.log('[handleClickCancel] props=', props.oncha)
         alert(e.target.id)
         // setShow(false)
         props.oncha(clockStates.CANCELLED, ClockWinnerState.CANCELLED, 'CANCELLED from auctioner Action Called');
      }

      const handleClickSale = (e) => {
         e.preventDefault();
         console.log('[handleClickSale] props=', props.oncha)
         alert(e.target.id)
         // setShow(false)
         props.oncha(clockStates.CANCELLED, ClockWinnerState.REGISTERED, 'SALE from auctioner Action Called');
      }

      const value = formatCurrencyEUR(price);
      return (<>
         {show ? (
            <div className="px-6 font-black text-gray-700 transform bg-gray-500 bg-opacity-75 shadow rounded- w-100 ">
               <div className="fixed z-10 flex bg-gray-700 bg-opacity-75 animated fadeIn pin" >
                  <div className="fixed relative flex flex-col justify-center justify-end h-auto p-2 m-auto align-top rounded shadow shadow-inner animated fadeInUp pin-b pin-x"
                  // <div className="fixed relative flex flex-col justify-center justify-end w-full h-auto max-w-md p-2 m-auto align-top rounded shadow shadow-inner animated fadeInUp pin-b pin-x"
                  >
                     <h2 className="mt-2 mb-2 text-2xl font-extrabold leading-loose text-center text-white ">
                        {buyer > 0 ? 'The WINNER is' : 'Minimum price reached'}
                     </h2>
                     <div className="mb-4 text-4xl font-extrabold leading-normal text-center text-white">
                        {/* Buyer:{winObj.buyer}<br />Price:{winObj.price} */}
                        {/* {winnerString} */}
                        {buyer} <span className="font-light"     >bid</span>
                        <span className="font-black"> {value}</span>
                     </div>
                     <div className="inline-flex justify-center">
                        <SaleBtn oncli={handleClickSale} ></SaleBtn>
                        <CancelBtn oncli={handleClickCancel} ></CancelBtn>
                        {/* <button type="button"
                           id="rebidbtn"
                           onClick={handleClickRebid}
                           className="flex-1 px-6 py-4 ml-2 font-bold text-gray-900 bg-gray-100 border-b-2 rounded md:flex-none border-red hover:bg-red-100"
                        >
                           REBID
                     </button> */}
                        <RebidBtn oncli={handleClickRebid} ></RebidBtn>
                     </div >
                  </div >
               </div >
            </div >
         ) : null}
      </>
      )
   }

   /* const MyComponent = ({onUpdate}) => {
      const [state, setState] = useState();
      useEffect(() => {
         // state updated, call onUpdate callback with state
            onUpdate(state);
         }, [onUpdate, state]);
         return ...
      }
      //  Now parent component can, given
      
      <MyComponent onUpdate={onUpdateHandler} />
      //  define onUpdateHandler as
      
      // questo è il modo per aggiornare il proprio figlio con la DISPATCH
      let onUpdateHandler = console.log;
      //  then later change it while still mounted
      
      onUpdateHandler = state => dispatch({ type: 'SAVE_STATE', state });
      */

   useEffect(() => {
      // show updated
      if (!show && props.websocket) setShow(true)
      if (props.clkState === clockStates.IDLE ||
         props.clkState === clockStates.STOP ||
         props.clkState === clockStates.CANCELLED
      ) setShow(false)

      console.log('[WINNERauction][UseEFFECT] show=', show)
   }, [props.clkState, props.websocket, show])

   console.log('[WINNERauction] RENDER props:', props)
   return (
      <>
         {show &&
            <TheWinnerIs oncha={props.onChange} websocket={props.websocket} />
         }
      </>
   )
}

export default WinnerAuction