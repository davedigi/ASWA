import React from 'react'

export const SupplierFmt = (props) => {

   return (
      <>
         <div className="relative w-16 h-16">
            <img className="border border-gray-100 rounded-full shadow-sm" src={props.imgsup} alt="supplier" />
            <div className="absolute top-0 right-0 w-4 h-4 my-1 bg-green-400 border-2 border-white rounded-full z-2"></div>
         </div>
         <div className="md:w-40" >
            <span
               id="supplierDescr"
               className="block ml-1 text-lg font-bold"
               onChange={(e) => props.onChange(e)}
            >
               {props.supplier.legalname}
            </span>
            <span className="block ml-0 text-base">
               {props.supplier.city}
            </span>
         </div>
      </>
   )
}
