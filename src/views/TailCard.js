import React from 'react'

export default function TailCard() {
   return (

      <div className="flex flex-wrap items-center justify-center p-24">

         <div className="relative flex-shrink-0 max-w-xs m-6 overflow-hidden bg-orange-500 rounded-lg shadow-lg">
            <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" >
               <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
               <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
               <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
               <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
            </div>
            <div className="relative px-6 pb-6 mt-6 text-white">
               <span className="block -mb-1 opacity-75">Indoor</span>
               <div className="flex justify-between">
                  <span className="block text-xl font-semibold">Peace Lily</span>
                  <span className="items-center block px-3 py-2 text-xs font-bold leading-none text-orange-500 bg-white rounded-full">$36.00</span>
               </div>
            </div>
         </div>
         <div className="relative flex-shrink-0 max-w-xs m-6 overflow-hidden bg-teal-500 rounded-lg shadow-lg">
            {/* <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;"> */}
            <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" >
               <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
               <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
               <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
               <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" alt="" />
            </div>
            <div className="relative px-6 pb-6 mt-6 text-white">
               <span className="block -mb-1 opacity-75">Outdoor</span>
               <div className="flex justify-between">
                  <span className="block text-xl font-semibold">Monstera</span>
                  <span className="items-center block px-3 py-2 text-xs font-bold leading-none text-teal-500 bg-white rounded-full">$45.00</span>
               </div>
            </div>
         </div>
         <div className="relative flex-shrink-0 max-w-xs m-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg">
            {/* <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{transform: scale(1.5), opacity: 0.1}}> */}
            <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" >
               <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
               <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
               {/* <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div> */}
               <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
            </div>
            <div className="relative px-6 pb-6 mt-6 text-white">
               <span className="block -mb-1 opacity-75">Outdoor</span>
               <div className="flex justify-between">
                  <span className="block text-xl font-semibold">Oak Tree</span>
                  <span className="items-center block px-3 py-2 text-xs font-bold leading-none text-purple-500 bg-white rounded-full">$68.50</span>
               </div>
            </div>
         </div>

      </div>
   )
}
