import React from 'react'
import ClockTick from './ClockTick'


const Header = (props) => {
    return (
        // <nav className="flex items-center justify-center p-4 bg-teal-500">
        //     <div className="flex mr-6 text-white">
        //         <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54"
        //             xmlns="http://www.w3.org/2000/svg">
        //             <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        //         </svg>
        //         <span className="text-2xl font-semibold tracking-tight">{props.title}</span>
        //     </div>
        // </nav >
        <nav className="fixed z-10 flex flex-wrap items-center justify-between w-full p-1 bg-teal-500 pin-t">
            <div className="flex items-center mr-6 text-white flex-no-shrink">
                <img className="w-10 mx-2" src={require('../../logo.svg')} alt="logo" />
                <ClockTick />
                <a className="text-white no-underline hover:text-white hover:no-underline" href="/#">
                    <span className="pl-6 text-2xl">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                        {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> */}
                        {/* </svg> */}
                        <i className="em em-grinning"></i> {props.title}</span>
                </a>
            </div>

            <div className="block md:hidden">
                <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <div className="flex-grow hidden w-full pt-6 lg:flex lg:items-center lg:w-auto lg:pt-0" id="nav-content">
                <ul className="items-center justify-end flex-1 list-reset lg:flex">
                    <li className="mr-3">
                        <a className="inline-block px-4 py-2 text-white no-underline" href="/#">Profile</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block px-4 py-2 no-underline text-grey-dark hover:text-grey-lighter hover:text-underline" href="/#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header