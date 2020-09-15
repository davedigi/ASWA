import React from 'react'
import Product from './Product'
import ProductCard from '../components/ProductCard'
import ListProducts from '../components/ListProducts'

class MainTiles extends React.Component {
    render() {
        return (
            <div>
                {/* <ProductCard /> */}
                <Product />
                <ListProducts />
            </div>
        )
    }
}

export default MainTiles
