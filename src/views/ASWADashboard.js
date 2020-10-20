import React from 'react';
import MenuIcons from '../components/ASWA/MenuIcons';
import AuctionOffProduct from "../components/ASWA/AuctionOffProduct"
import Header from "../components/shared/Header"
import Navbar from '../components/Navbar';
import WinnerAuction from '../components/ASWA/actionServices/WinnerAuction';


export default function ASWADashboard() {
    const menu = React.useState([
        { id: 2, label: "Login", url: "/login", active: true },
        { id: 3, label: "Register", url: "/register", active: true },
        { id: 0, label: "Auction Sales System", url: "/aswadashboard", active: true, },
        {
            id: 1,
            label: "List Products",
            url: "/listproducts-tb",
            active: true,
        },
    ], []);
    // console.log(menu);   // const preparedItem = {}
    // TODO
    const [preparedItem, setPreparedItem] = React.useState([
        { "supplier": { id: 1, legalname: 'Floreal Garofalo', city: 'Pozzallo(RG)' } },
        {
            "product": {
                id: 1,
                code: "G127",
                descr: "Gerbere Milanesi ",
                size: "gambo lungo",
                // imageurl:"assets/products/gerbere-milanesi.jpg",
                imageurl: "/gerbere-milanesi.jpg",
                minprice: 1020,
                suggestedprice: 1267
            }
        },
    ], [])
    return (
        // <div className="container">
        <div>

            <Header title="Auction Sales System" />
            {/* <Navbar items={menu}/> */}
            <MenuIcons />
            <AuctionOffProduct preparedItem={preparedItem} />

            {/* <ASWAFooter /> */}
        </div>
    )
}
