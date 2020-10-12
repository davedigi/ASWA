import React, { useState, useEffect } from 'react'


const ClockTick = () => {
    const [Data, setData] = useState(new Date())


    function FormattedDate(props) {
        return (
            <h2>{new Date().toLocaleTimeString()}</h2>
        )
    }

    useEffect(() => {
        console.log("orologio header: ENTRO in useEffect()")
        const timer = setInterval(() => {
            setData((Data) => (new Date()))
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [])

    return (
        <div>
            <FormattedDate {...Data} />
        </div>
    );
}
// setInterval(Tick, 1000);


const Header = (props) => {
    return (
        // <nav className="flex items-center justify-center   bg-teal-500 p-4">
        //     <div className="flex  text-white mr-6">
        //         <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
        //             xmlns="http://www.w3.org/2000/svg">
        //             <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        //         </svg>
        //         <span className="font-semibold text-2xl tracking-tight">{props.title}</span>
        //     </div>
        // </nav >
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-1 fixed w-full z-10 pin-t">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <img className="w-10 mx-2" src={require('../../logo.svg')} alt="logo" />
                <ClockTick />
                <a className="text-white no-underline hover:text-white hover:no-underline" href="/#">
                    <span className="text-2xl pl-6">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                        {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> */}
                        {/* </svg> */}
                        <i className="em em-grinning"></i> {props.title}</span>
                </a>
            </div>

            <div className="block lg:hidden">
                <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0" id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3">
                        <a className="inline-block py-2 px-4 text-white no-underline" href="/#">Profile</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="/#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header