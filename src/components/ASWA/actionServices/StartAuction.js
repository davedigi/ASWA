import React from 'react'
import { ACCESS_TOKEN_NAME, APP_API_URL, APP_API_PORT } from './../../../Hooks/apiContants';

function startAuctionService(params) {

   fetch(APP_API_URL + ':' + APP_API_PORT + "/user", {
      headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) }
   })
      .then(response => {
         // Ensure service exists, and that we really are getting a JSON file.
         const contentType = response.headers.get('content-type');
         if (
            response.status === 404 ||
            (contentType != null && contentType.indexOf('JSON') === -1)
         ) {
            // No service found. Probably a different app. 

         } else {
            // Service found. Proceed as normal.

         }
      })
      .catch(() => {
         console.log(
            'No internet connection found. App is running in offline mode.'
         );
      });
}

const StartAuction = () => {
   return (
      <div>
         StartAuction
      </div>
   )
}

export default StartAuction
