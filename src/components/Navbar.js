import Box from '@material-ui/core/Box';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import "./shared/utils"

const Navbar = (props) => {
    // alert(JSON.stringify(props.items))
    const arr = Object.entries(props.items);
    console.log(JSON.stringify(arr))
    arr.sort((a, b) => {
        return a[1].id - b[1].id;
    });
    arr.map((item) => {
        console.log(item[1].label, item[1].url, item[1].active)
    })

    return (
        <Box component="nav" >
            <AppBar >
                {arr.map((item) => (
                    <Link to={item[1].url} key={item[1].id} >{item[1].label}</Link>
                ))
                }
            </AppBar>
        </Box>
    )
}

export default Navbar
