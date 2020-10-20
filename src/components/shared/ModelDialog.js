import React from 'react'

export default function ModalDialog(props) {
   const [modalDisplay, toggleDisplay] = React.useState('none');
   const openModal = () => {
      console.log(' toggleDisplay(\'block\')')
      toggleDisplay('block');
   }
   const closeModal = () => {
      toggleDisplay('none');
      // props.hideError(null);
   }
   React.useEffect(() => {
      console.log('[WinnerAuction USEEFFECT]')
      if (props.errorMessage !== null) {
         console.log('apro la modale')
         openModal()
      } else {
         console.log('chiudo la modale')
         closeModal()
      }
   });
   return (

      <div className="text-grey-darkest" >
         <div className="m-12 leading-loose tracking-wide">
            <button className="flex-1 px-6 py-4 ml-2 font-bold border-b-2 rounded bg-grey-lighter md:flex-none border-grey hover:bg-grey-lightest text-grey-darkest" onClick={openModal}>
               Question
                </button>
            <p>
               Questa modale funziona solo dopo avere ricompilato tailwindcss.
            </p>
         </div>
         <div onClick={openModal} className="fixed z-50 flex overflow-auto animated fadeIn pin bg-smoke-dark" >
            <div className="fixed flex flex-col justify-end w-full max-w-md p-8 m-auto align-top bg-white shadow-inner animated fadeInUp md:relative pin-b pin-x md:justify-center md:rounded md:h-auto md:shadow"
               style={{ display: modalDisplay }}
            >
               <h2 className="mb-4 text-4xl font-hairline text-center md:leading-loose text-grey md:mt-8">Question!</h2>
               <p className="mb-8 text-xl leading-normal text-center">
                  Are you enjoying Tailwind CSS?
               </p>
               <div className="inline-flex justify-center">
                  <button onClick={closeModal} className="flex-1 px-6 py-4 ml-2 font-bold border-b-2 rounded bg-grey-lighter md:flex-none border-green hover:bg-green-lightest text-grey-darkest">
                     Absolutely
                        </button>
                  <button onClick={closeModal} className="flex-1 px-6 py-4 ml-2 font-bold border-b-2 rounded bg-grey-lighter md:flex-none border-red hover:bg-red-lightest text-grey-darkest">
                     Not so much
                        </button>
               </div >
               <span onClick={openModal} className="absolute px-4 pt-4 pin-t pin-r" >
                  <svg className="w-12 h-12 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
               </span >
            </div >
         </div >
      </div >
   )
}
