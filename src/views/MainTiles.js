import React from 'react'
import Product from './Product'
import ProductCard from '../components/ProductCard'
import ListProducts from '../components/ListProducts'
import AuctioOffProduct from '../components/AWSA/AuctionOffProduct'
import ListUsers from '../components/shared/ListUsers'

class MainTiles extends React.Component {
    render() {
        return (
            <div>
                {/* <ProductCard /> */}
                {/* <Product /> */}
                <AuctioOffProduct />
                <ListUsers />
                <ListProducts />
            </div>
        )
    }
}

export default MainTiles
