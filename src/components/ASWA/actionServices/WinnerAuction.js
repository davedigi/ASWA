import React from 'react'

export default function WinnerAuction(props) {

   React.useEffect(() => {
      console.log(props.websocket)
      // props.showError("ERROR from Digital Clock")
      return () => {

      }
   }, [props])

   return (
      <>
         <h1
            className="px-6 mb-2 font-black text-gray-700 transform bg-gray-500 bg-opacity-75 rounded shadow w-100 modal ">{props.websocket}
         </h1>
         <div>
            The WINNER IS...
         </div>
      </>
   )
}
