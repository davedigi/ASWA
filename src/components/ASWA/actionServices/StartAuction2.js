import React, { useState } from 'react'
import axios from 'axios'
import {
   ACCESS_TOKEN_NAME, PROC_API_PDD_START, APP_API_WATCH_PORT,
   APP_API_WATCH_URL, APP_API_URL, APP_API_PORT
} from '../../../Hooks/apiContants';
import Timer from '../Timer100'
import { IClockStates, clockStates } from "./TypesAuction"

function startAuctionService2(params) {
   
   console.log("partenza orologio con params=", params)

   /*    const payload = {
         "clockwise": false,
         "startPrice_cent": 2055,
         "minPrice_cent": 1055,
         "speed_ms": 20,
         "tailSize": 10
      } */
   const headers = {
      'Content-Type': 'application/json'
   };
   axios.post(APP_API_URL + ':' + APP_API_PORT + '/start', params, { headers })
      .then(function (response) {
         if (response.status === 200) {
            // setState(prevState => ({
            //    ...prevState,
            //    'successMessage': 'START successful. '
            // }))
            localStorage.setItem("CLOCK_START_PARAMS", JSON.stringify(params));
            console.log("start backend response ok", params)
         }
         else if (response.code === 204) {
            console.log("application error 204");
         }
         else {
            console.log("problems encountered");
         }
      })
      .catch(function (error) {
         if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const message = error.response.data.message

            console.log('err message from direct digital watch=', message);

            console.log(error.response.status);
            console.log(error.response.headers);
            return <span>{message}</span>
         } else if (error.request) {
            console.log("The request was made but no response was received. `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js:", error.request);
         } else {
            console.log('Something happened in setting up the request that triggered an Error:', error.message);
         }
         // console.log(error.config);
         // console.log(error.toJSON());
         console.log("CATCH error in axios.post direct digital watch, No internet connection found? Peraphs App is running in offline mode.", error)
         return <span>{error.message}</span>
      });
}


export const StartAuction2 = (props) => {
   startAuctionService2(props)
   return (
      <div>
         <span>START OROLOGIO! </span>
         <span className="block">GIRI DI PARTENZA: {props.clockParams.spin} </span>
         <div className="timer-font mt-2"><Timer spin={props.clockParams.spin} loop={false} /></div>
      </div>
   )
}

export default StartAuction2
