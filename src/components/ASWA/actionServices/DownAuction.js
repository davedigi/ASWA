import Axios from 'axios'
import React from 'react'
import {APP_API_URL, APP_API_PORT} from '../../../Hooks/apiContants'

function DownAuctionService() {
   console.log('DownAuctionService requested')
   Axios.get(APP_API_URL + ':' + APP_API_PORT + '/down')
      .then(function (res) {
         if (res.status === 200) {
            // setState(prevState => ({
            //    ...prevState,
            //    'successMessage': 'STOP successful. '
            // }))
            // localStorage.setItem('clock_RESPONSE', response.data)
            console.log('DOWN ok e API get working and return :', res.statusText )
         } else if (res.code === 204) {
            console.log('application error 204')
         } else {
            console.log('problems encountered')
         }
      })
      .catch(function (error) {
         if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const message = error.response.data.title

            console.log('err message from direct digital clock=', message)

            console.log(error.response.status)
            console.log(error.response.headers)
         } else if (error.request) {
            console.log('The request was made but no response was received. `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js:', error.request)
         } else {
            //
            console.log('Something happened in setting up the request that triggered an Error:', error.message)
         }
         console.log(error.config)
         console.log('CATCH error in axios.post direct digital clock, No internet connection found? Peraphs App is running in offline mode.', error)
      })


}
const DownAuction = (props) => {
   DownAuctionService()
   return (
      <div>
         

      </div>
   )
}

export default DownAuction