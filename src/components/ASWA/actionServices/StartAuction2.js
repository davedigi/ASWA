import React, { useState } from 'react'
import axios from 'axios'
import { APP_API_URL, APP_API_PORT } from '../../../Hooks/apiContants';
import Timer from '../Timer100'
import { IClockStates, clockStates } from "./TypesAuction"
import AlertComponent from '../../shared/AlertComponent'
import Sleep from '../../shared/Sleep'

const headers = {
   'Content-Type': 'application/json'
};

// TODO handleError() Digital Clock
function getLastWinner(props) {

   let msg = 'TORNO con il VINCITORE?'
   if (!window.confirm(msg)) {
      return ''
   }

   props.onChange(clockStates.COMPLETED, 1, 'WINNER FROM CLOCK Action Called')

   axios.get(APP_API_URL + ':' + APP_API_PORT + '/clock/lastwinner', { headers })
      .then(function (response) {
         if (response.status === 200) {
            localStorage.setItem("CLOCK_LAST_WINNER", JSON.stringify(response.data));
            const msg = response.data.message
               + ' and THE WINNER IS '
               + response.data.data[0]['buyer']

            alert(msg)
            console.log("[BACKEND] ", response.data.message, response.data.data[0])
            return clockStates.COMPLETED
         }
      }
      )
      .catch(function (error) {
         if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const message = error.response.data.message

            console.log('[BACKEND] ERROR:', message);

            // console.log(error.response.status);
            // console.log(error.response.headers);
            // return (error.message)
            return clockStates.CANCELLED
         } else if (error.request) {
            console.log("[BACKEND] The request was made but no response was received. `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js:", error.request);
         } else {
            console.log('[BACKEND] Something happened in setting up the request that triggered an Error:', error.message);
         }
         // console.log(error.config);
         // console.log(error.toJSON());
         console.log("[BACKEND] CATCH error in axios.get, No internet connection found? Peraphs App is running in offline mode.", error)
         // return (error.message)
         return clockStates.CANCELLED
      })
}

function startAuctionService2(props) {


   /*    const payload = {
      "clockwise": false,
      "startPrice_cent": 2055,
      "minPrice_cent": 1055,
      "speed_ms": 20,
      "tailSize": 10
   } */
   axios.post(APP_API_URL + ':' + APP_API_PORT + '/start', props, { headers })
      .then(function (response) {
         if (response.status === 200) {

            localStorage.setItem("CLOCK_START_PARAMS", JSON.stringify(props));
            console.log("[BACKEND] START clock ok", props)
            // GO TO RECEIVE THE LAST WINNER
            if (props.clkState === clockStates.STOP)
               return getLastWinner(props)
         }
         else if (response.code === 204) {
            console.log("[BACKEND] application error 204");
         }
         else {
            console.log("[BACKEND] problems encountered");
         }
      })
      .catch(function (error) {
         if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const message = error.response.data.message

            console.log('[BACKEND] err message from direct digital watch=', message);

            // console.log(error.response.status);
            // console.log(error.response.headers);
            return (error.message)
         } else if (error.request) {
            console.log("[BACKEND] The request was made but no response was received. `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js:", error.request);
         } else {
            console.log('[BACKEND] Something happened in setting up the request that triggered an Error:', error.message);
         }
         // console.log(error.config);
         // console.log(error.toJSON());
         console.log("[BACKEND] CATCH error in axios.post direct digital watch, No internet connection found? Peraphs App is running in offline mode.", error)
         return (error.message)
      })
}

export const StartAuction2 = (props) => {
   const [errorMessage, setErrorMessage] = useState(props.clkState)
   console.log("[AUCTIONOFF] Partenza orologio con props=", props)
   // let msg = 'parto con lo stato ' + props.clkState
   // alert(msg)
   startAuctionService2(props)

   return (
      <div>
         <span>START OROLOGIO! </span>
         <Sleep show={true} totMs={20000} interval={1000} />
         <span className="block">GIRI DI PARTENZA: {props.clockParams.spin} </span>
         <div className="mt-2 timer-font"><Timer spin={props.clockParams.spin} loop={false} /></div>
         <AlertComponent errorMessage={errorMessage} />
      </div>
   )
}

export default StartAuction2
