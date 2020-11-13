import React from 'react'
import MenuIcons from '../components/ASWA/MenuIcons'
import AuctionOffProduct from "../components/ASWA/AuctionOffProduct"
import Header from "../components/shared/Header"
import TransactionRedux from '../components/ASWA/store/TransactionRedux'

const preparedModel = [
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
]

const menuModel = [
    { id: 2, label: "Login", url: "/login", active: true },
    { id: 3, label: "Register", url: "/register", active: true },
    { id: 0, label: "Auction Sales System", url: "/aswadashboard", active: true, },
    {
        id: 1,
        label: "List Products",
        url: "/listproducts-tb",
        active: true,
    },
]

export default function ASWADashboard() {
    const menu = React.useState(menuModel, []);
    // console.log(menu);   // const preparedItem = {}

    // TODO
    const [preparedItem, setPreparedItem] = React.useState(preparedModel, [])

    return (
        <div className='border'>
            <Header />
            {/* <Navbar items={menu}/> */}
            <div className="mt-16"></div>
            <AuctionOffProduct preparedItem={preparedItem} />
            <div className="max-w-full p-2 overflow-hidden text-center text-gray-700 bg-green-300 rounded-lg shadow-lg flex-column min-w-sm" >
                <TransactionRedux />
            </div>
            {/* <Counter /> */}
            {/* <MenuIcons /> */}
            {/* <ASWAFooter /> */}
        </div>
    )
}
