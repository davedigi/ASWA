import React from 'react'
import ListProductsTable from '../components/ListProductsTable';
import MenuIcons from '../components/MenuIcons';
import AuctionOffProduct from "../components/ASWA/AuctionOffProduct"
import ListUsers from '../components/shared/ListUsers'
import ASWAFooter from "../components/ASWA/ASWAFooter"

const ASWADashboard = () => {
    return (
        <div className="container">
            <MenuIcons />
            <AuctionOffProduct />
            <ListUsers />
            <ListProductsTable />
            <ASWAFooter />
        </div>
    )
}

export default ASWADashboard