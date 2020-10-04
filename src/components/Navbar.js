import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    // alert(JSON.stringify(props.items))
    const voices = []
    if (props.items) {

        const arr = Object.entries(props.items);
        console.log('navbar arr in entrata=', arr[0])
        arr[0].sort((a, b) => {
            return a[0].id - b[0].id;
        });
        arr[0].map((item) => {
            Object.keys(item).forEach(function (key) {
                voices.push(item[key]);
            });
            return voices
        })
        /*   const valids = voices.some(voice => voice.active);
        console.log(valids); // true */
        voices.forEach((element, index, array) => {
            console.log('index', index); // 0, 1, 2
            console.log('id=', element.id); // 100, 200, 300
            console.log('label=', element.label); // 100, 200, 300
            console.log('url=', element.url); // 100, 200, 300
            // console.log('voices', array); // same myArray object 3 times
        });
    }

    return (
        <>
            <div className="flex flex-wrap">
                {voices.map((element) => (
                    <div key={element.id} className="w-1/5 ml-auto text-sm justify-right bg-gray-400 h-10">
                        <Link key={element.id} to={element.url}  >{element.label}</Link>
                    </div>
                ))
                }
                {/* <JSONPretty data={props.items} /> */}
            </div>
            {/* Navbar */}
        </>
    )
}

export default Navbar
