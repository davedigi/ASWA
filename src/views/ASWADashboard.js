import React from 'react'
import MenuIcons from '../components/ASWA/MenuIcons'
import AuctionOffProduct from "../components/ASWA/AuctionOffProduct"
import Header from "../components/shared/Header"
import TransactionRedux from '../components/ASWA/store/TransactionRedux'
import UserList from '../components/ASWA/UserList'
import ListUsers from '../components/shared/ListUsers'

import { APP_MIRROR_CLOCK_URL } from '../Hooks/apiContants'

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
    const [buyerShow, setBuyerShow] = React.useState(false);
    const [clockShow, setClockShow] = React.useState(false);
    const [alarmsShow, setAlarmsShow] = React.useState(false);
    const [users, setUsers] = React.useState([]);
    // console.log(menu);   // const preparedItem = {}

    // TODO
    const [preparedItem, setPreparedItem] = React.useState(preparedModel, [])

    const onChangeUsers = (users) => {
        setUsers(users)
    }

    return (
        <div className='border'>
            <Header />
            <div className="mt-16"></div>
            <div className="grid grid-cols-4 gap-1 border">
                <button className="flex-1 px-1 m-1 font-bold text-gray-900 bg-teal-200 rounded-lg md:flex-none border-red hover:bg-orange-300"
                    id="auctionerhelp"
                    onClick={() => setBuyerShow(!buyerShow)}
                > LIVE Buyers List {buyerShow ? <span className="w-20 text-xl text-right border-2 border-gray-900">X</span> : <span>&darr;</span>}
                </button>
                <button className="flex-1 px-1 m-1 font-bold text-gray-900 bg-teal-200 rounded-lg md:flex-none border-red hover:bg-orange-300"
                    id="auctionerhelp"
                > AUCTIONER Help &darr;
                   </button>
                <div></div>
                <button className="flex-1 px-1 m-1 font-bold text-gray-900 bg-teal-200 rounded-lg md:flex-none border-red hover:bg-orange-300"
                    id="mirrorclock"
                    onClick={() => setClockShow(!clockShow)}
                > LIVE Digital Clock {clockShow ? <span className="w-20 text-xl text-right border-2 border-gray-900">X</span> : <span>&darr;</span>}
                </button>
                <div className={
                    (buyerShow ? "block " : "hidden ") + "object-cover h-full col-span-1 mr-2 rounded-2xl"} >
                    {/* <img src="https://via.placeholder.com/300x600?text=LIVE Users List" alt="LIVE Users List" /> */}
                    {/* <UserList onChange={onChangeUsers} /> */}
                    <ListUsers />
                </div>
                <div className="col-span-2 col-start-2">
                    <AuctionOffProduct preparedItem={preparedItem} />
                </div>
                <div className={
                    (clockShow ? "block " : "hidden ") + "object-cover h-full col-span-1 mr-2 rounded-2xl"} >
                    <img className="rounded-lg " src={APP_MIRROR_CLOCK_URL} alt="LIVE Digital Clock" />
                </div>
                <button className="flex-1 h-6 px-1 m-1 font-bold text-red-800 bg-gray-300 rounded-lg md:flex-none border-red hover:bg-orange-300"
                    id="alarmlist"
                > Alarms List &darr;
                </button>
                {/* <div><MenuIcons /></div> */}
                <div className="col-start-2 col-end-5">
                    <div className="max-w-full p-2 overflow-hidden text-center text-gray-700 bg-green-300 rounded-lg shadow-lg flex-column min-w-sm" >
                        <TransactionRedux />
                    </div>
                </div>
            </div>
            {/* <Navbar items={menu}/> */}

            {/* <ASWAFooter /> */}
        </div>
    )
}
