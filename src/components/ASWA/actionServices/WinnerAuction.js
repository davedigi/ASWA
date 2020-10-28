import React, { useState, useEffect } from 'react'
import { IClockStates, clockStates } from "./TypesAuction"

export const WinnerAuction = (props) => {

   const { SaleBtn, CancelBtn, RebidBtn } = ASWAButton();
   const [localShow, setLocalShow] = useState(false)

   function TheWinnerIs(props) {
      if (!localShow) return null
      let test = ""
      if (props.websocket) {
         if (props.websocket.indexOf('[WS BACKEND]') === -1) {
            let arr = props.websocket.split(',')
            const buyer = (arr[2].split(':')[1]);
            test = buyer.slice(1, buyer.length - 1)
            console.log('buyer trovato==', test)
         } else console.log('stocazz:', props.websocket.indexOf('[WS BACKEND]'))
      }
      // console.log('WINNERauction props:', JSON.parse(str))
      return (
         <div className="px-6 font-black text-gray-700 transform bg-gray-500 bg-opacity-75 shadow rounded- w-100 ">
            <div className="fixed z-10 flex bg-gray-700 bg-opacity-75 animated fadeIn pin" >
               <div className="fixed relative flex flex-col justify-center justify-end h-auto p-2 m-auto align-top rounded shadow shadow-inner animated fadeInUp pin-b pin-x"
               // <div className="fixed relative flex flex-col justify-center justify-end w-full h-auto max-w-md p-2 m-auto align-top rounded shadow shadow-inner animated fadeInUp pin-b pin-x"
               >
                  <h2 className="mt-4 mb-2 text-4xl font-extrabold leading-loose text-center text-black ">The WINNER is</h2>
                  <div className="mb-4 leading-normal text-center text-black font-2xl">
                     {/* Buyer:{winObj.buyer}<br />Price:{winObj.price} */}
                     {/* {winnerString} */}
                     {test}
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
   useEffect(() => {

      console.log('DENTRO UseEFFECT WINNERauction props:', props)

      if (props.show.clkState !== clockStates.IDLE) {
         if (props.websocket) {
            if (props.websocket.indexOf('[WS BACKEND]') === 0) {
               setLocalShow(false) // COMMENTARE SOLO PER DEBUG! 
            } else setLocalShow(true)
         }
      }else setLocalShow(true)
      // const winObj = JSON.parse(props.websocket)
      // const winnerString = props.websocket
      return () => {

      }
   }, [props, setLocalShow])

   return (
      <>
         {/* <h1>The WINNER IS...</h1>
         <h1 >
            {props.websocket}
         </h1> */}
         < TheWinnerIs show={props.show} websocket={props.websocket} />
      </>
   )
}
function ASWAButton() {
   const RebidBtn = () => (
      <button className="flex-1 px-6 py-4 ml-2 font-bold text-gray-900 bg-gray-100 border-b-2 rounded md:flex-none border-red hover:bg-red-100">
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