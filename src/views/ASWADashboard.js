import React from 'react';
import useState from 'react'
import ListProductsTable from '../components/ListProductsTable';
import MenuIcons from '../components/MenuIcons';
import AuctionOffProduct from "../components/ASWA/AuctionOffProduct"
import ListUsers from '../components/shared/ListUsers'
import ASWAFooter from "../components/ASWA/ASWAFooter"

export default function ASWADashboard() {
    const [preparedItem, setPreparedItem] = useState([
        ["pippo","pluto"],
    ])
    // const [preparedItem, setPreparedItem] = useState({
    //     data:[
    //     supplier: { id: 1, legalname: 'Floreal Garofalo', city: 'Pozzallo(RG)' },
    //     product: { code: "G127", descr: "Droogbloemen bewerkt H%" },
    // ]})
    return (
        <div className="container">
            <MenuIcons />
            {/* <AuctionOffProduct preparedItem={preparedItem} /> */}
            <AuctionOffProduct  />
            <ListUsers />
            <ListProductsTable />
            <ASWAFooter />
        </div>
    )
}
