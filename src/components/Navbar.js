import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    // alert(JSON.stringify(props.items))
    const arr = Object.entries(props.items);
    console.log('arr in entrata=', arr)
    arr.sort((a, b) => {
        return a[1].id - b[1].id;
    });
    arr.map((item) => {
        console.log('arr iterato=', item[1].label, item[1].url, item[1].active)
        return ""
    })

    return (
        <div className="flex flex-wrap">
            {arr.map((item) => (
                <div key={item[1].id} className="w-1/4 ml-auto justify-right bg-gray-400 h-12">
                    <Link to={item[1].url}  >{item[1].label}</Link>
                </div>
            ))
            }
        </div>
    )
}

export default Navbar
