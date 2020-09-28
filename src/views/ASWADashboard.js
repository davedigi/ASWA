import React from 'react';
import MenuIcons from '../components/MenuIcons';
import AuctionOffProduct from "../components/ASWA/AuctionOffProduct"
import ASWAFooter from "../components/ASWA/ASWAFooter"
import Header from "../components/shared/Header"


export default function ASWADashboard() {
    const preparedItem = {}
    // TODO
    // const [preparedItem, setPreparedItem] = useState({
    //     data:[
    //     supplier: { id: 1, legalname: 'Floreal Garofalo', city: 'Pozzallo(RG)' },
    //     product: { code: "G127", descr: "Droogbloemen bewerkt H%" },
    // ]})
    return (
        // <div className="container">
        <div>
            <Header title="Auction Sales System" />
            <MenuIcons />
            <AuctionOffProduct preparedItem={preparedItem} />
            {/* <ASWAFooter /> */}
        </div>
    )
}
