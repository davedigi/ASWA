import React, { useState, useEffect } from 'react'
import { Alert } from '../../shared/Alert';
import { IClockStates, clockStates } from "./TypesAuction"

export const WinnerAuction = (props) => {

   const { SaleBtn, CancelBtn, RebidBtn } = ASWAButton();
   const [show, setShow] = useState(true)

   const ClockWinnerState = {
      PENDING: 'PENDING',
      CANCELLED: 'CANCELLED',
      REGISTERED: 'REGISTERED'
   }

   const SocketType = {
      WINNER: 'WINNER',
      INIT: 'INIT'
   }

   function TheWinnerIs(props) {

      console.log('DENTRO WINNERauction props:', props)
      // if (props.websocket.socketType !== SocketType.WINNER) {
      if (!props.websocket) {
         console.log('nessuna renderizzazione Winner')
         return null
      }

      let buyer = ""
      let price = ""
      let socketType = ""
      if (props.websocket) {
         socketType = getFieldInJsonString(1, props.websocket, socketType);

         console.log('VADO a renderizzazione Winner:', socketType)
         if (socketType === SocketType.WINNER) {
            // if (props.websocket.indexOf('[WS BACKEND]') === -1) {
            price = getFieldInJsonString(2, props.websocket, price);
            buyer = getFieldInJsonString(3, props.websocket, buyer);

         } else console.error('[WINNER AUCTION] socketType:', socketType)
      }

      const value = formatCurrencyEUR(price);

      return ( props.show && 
         <div className="px-6 font-black text-gray-700 transform bg-gray-500 bg-opacity-75 shadow rounded- w-100 ">
            <div className="fixed z-10 flex bg-gray-700 bg-opacity-75 animated fadeIn pin" >
               <div className="fixed relative flex flex-col justify-center justify-end h-auto p-2 m-auto align-top rounded shadow shadow-inner animated fadeInUp pin-b pin-x"
               // <div className="fixed relative flex flex-col justify-center justify-end w-full h-auto max-w-md p-2 m-auto align-top rounded shadow shadow-inner animated fadeInUp pin-b pin-x"
               >
                  <h2 className="mt-2 mb-2 text-xl font-extrabold leading-loose text-center text-white ">The WINNER is</h2>
                  <div className="mb-4 text-4xl font-extrabold leading-normal text-center text-white">
                     {/* Buyer:{winObj.buyer}<br />Price:{winObj.price} */}
                     {/* {winnerString} */}
                     {buyer} <span className="font-light"     >bid</span> {value}
                  </div>
                  <div className="inline-flex justify-center">
                     <SaleBtn></SaleBtn>
                     <CancelBtn></CancelBtn>
                     <RebidBtn></RebidBtn>
                  </div >
               </div >
            </div >
         </div >
      )
   }

   /* const MyComponent = ({ onUpdate }) => {
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
   
   let onUpdateHandler = console.log;
   //  then later change it while still mounted
   
   onUpdateHandler = state => dispatch({ type: 'SAVE_STATE', state });
   */

   return (
      <>
         {/* <h1>The WINNER IS...</h1>
         <h1 >
            {props.websocket}
         </h1> */}
         <TheWinnerIs show={show} websocket={props.websocket} />
      </>
   )
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
   const RebidBtn = () => (
      <button onClick={() => props.state.setShow(false)} className="flex-1 px-6 py-4 ml-2 font-bold text-gray-900 bg-gray-100 border-b-2 rounded md:flex-none border-red hover:bg-red-100">
         REBID
      </button>
   );

   const CancelBtn = () => (
      <button className="flex-1 flex-none px-6 py-4 ml-2 font-bold text-gray-900 bg-gray-100 border-b-2 rounded border-red hover:bg-red-100">
         CANCEL
      </button>
   );

   const SaleBtn = () => (
      <button className="flex-1 flex-none px-6 py-4 ml-2 font-bold text-gray-900 bg-gray-100 border-b-2 rounded border-green hover:bg-green-100">
         SALE
      </button>
   );
   return { SaleBtn, CancelBtn, RebidBtn };
}

export default WinnerAuction