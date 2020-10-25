import React, { useState } from 'react'
import axios from 'axios'
import { APP_API_URL, APP_API_PORT } from '../../../Hooks/apiContants';

function displayGDDService(params) {

   console.log("[DISPLAY GDD] Display orologio con params=", params)
   /*    const payload = {
         "Product": "gerbere milanesi",
         "Producer": "Floreal Garofalo",
         "Image_url": "http://localhost:3000/gerbere-milanesi.jpg",
      } */
   const payload = {
      "Product": params.state.flowerDescr,
      "Producer": params.state.supplierDescr,
      "Image_url": params.state.imageUrl
   }
   const headers = {
      'Content-Type': 'application/json'
   };
   if (!payload.Producer)
      payload.Producer = "Floreal Garofalo"

   if (!payload.Image_url)
      // payload.Image_url = "http://localhost:3000/gerbere-milanesi.jpg"
      payload.Image_url = "http://10.100.1.109/gerbere-milanesi.jpg"

   axios.post(APP_API_URL + ':' + APP_API_PORT + '/display', payload, { headers })
      .then(function (response) {
         if (response.status === 200) {
            // setState(prevState => ({
            //    ...prevState,
            //    'successMessage': 'START successful. '
            // }))
            localStorage.setItem("CLOCK_START_GDD", JSON.stringify(payload));
            console.log("[BACKEND] display backend response ok", params)
         }
         else if (response.code === 204) {
            console.log("[BACKEND] ERROR application error 204");
         }
         else {
            console.log("[BACKEND] ERROR problems encountered");
         }
      })
      .catch(function (error) {
         if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const message = error.response.data.message

            console.log('[BACKEND] ERROR message from direct digital clock=', message);

            // console.log(error.response.status);
            // console.log(error.response.headers);
            return <span>{message}</span>
         } else if (error.request) {
            console.log("[BACKEND] ERROR The request was made but no response was received. `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js:", error.request);
         } else {
            console.log('[BACKEND] ERROR Something happened in setting up the request that triggered an Error:', error.message);
         }
         // console.log(error.config);
         // console.log(error.toJSON());
         console.log("[BACKEND] CATCH ERROR in axios.post direct digital clock, No internet connection found? Peraphs App is running in offline mode.", error)
         return <span>{error.message}</span>
      });
}

export const DisplayGDD = (props) => {
   displayGDDService(props)
   return (
      <div>
         {/* <span>DISPLAY OROLOGIO! </span>
         <span className="block">Product: {props.state.flowerDescr} </span>
         <span className="block">Supplier: {props.state.supplierCode} </span> */}
      </div>
   )
}

export default DisplayGDD
