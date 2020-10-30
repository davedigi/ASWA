import React from 'react';

/* Alerts one message, two strings, the 1st is extrabold
   <b className="capitalize">{props.msg1}</b>{props.msg2}
 */
export const Alert = (props) => {
   const [showAlert, setShowAlert] = React.useState(true);
   return (<>
      {showAlert ? (
         <div
            className="relative px-6 py-4 mb-4 text-white bg-gray-500 border-0 rounded"
         >
            <span className="inline-block mr-5 text-xl align-middle">
               <i className="fas fa-bell" />
            </span>
            <span className="inline-block mr-8 align-middle">
               <b className="capitalize">{props.msg1}</b>&nbsp;{props.msg2}
            </span>
            <button
               className="absolute top-0 right-0 mt-4 mr-6 text-2xl font-semibold leading-none bg-transparent outline-none focus:outline-none"
               onClick={() => setShowAlert(false)}
            >
               <span>×</span>
            </button>
         </div>
      ) : null}
   </>
   );
};
