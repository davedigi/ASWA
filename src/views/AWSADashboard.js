import React from 'react'
import ListProducts from '../components/ListProducts';
import MenuIcons from '../components/MenuIcons';
import AuctionOffProduct from '../AWSA'
import ListUsers from '../AWSA'
import AWSAFooter from '../components/AWSA'
import Header from '../components/shared/'

const AWSADashboard = () => {
    return (
        <div className="container bg-dashboard">
            <Header title="Auction Sales System"/>
            <MenuIcons />
            <AuctionOffProduct />
            <ListUsers />
            <ListProducts />
            <AWSAFooter />
        </div>
    )
}

export default AWSADashboard