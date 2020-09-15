import React from 'react'
import ListProducts from '../components/ListProducts';
import MenuIcons from '../components/MenuIcons';
import MainTiles from './MainTiles';
 
const AWSADashboard = () => {
    return (
        <div className="container">
            <MenuIcons />       
            <MainTiles />
            {/* <ListProducts /> */}
        </div>
    )
}

export default AWSADashboard