import React from 'react'
import ListProducts from '../components/ListProducts.jsx'
import App from '../App.js'
import {
    BrowserRouter as Router,
    Switch, Link,
    Route
} from 'react-router-dom'

class MainTiles extends React.Component {
    render() {
        return (
            <div className="item-center">
                <div className="relative pb-10 min-h-screen">
                    <Router>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/listproducts">listproducts</Link>
                                </li>
                            </ul>
                            <Route exact path="/" component={MainTiles} />
                            <Route path="/listproducts" component={ListProducts} />
                        </div>
                    </Router>
            </div>
            </div >
        )
    }
}

export default MainTiles
