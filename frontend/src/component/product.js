import React, { Component } from 'react'
import '../css/cart.css'
import imgg from '../images/3.jpg'
import BidAsk from './BidAsk'
import '../css/product.css'

class Product extends Component {
    render() {
        return (
            <div>
                <div className="containe container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="car card">
                            <div className="card-header">
                                <div className="container">
                                    <div className="row top_bar">
                                        <div className="col">
                                            <div className="row"><h3>wheat</h3></div>
                                            <div className="row"><h4>Uganda</h4></div>
                                            <div className="row"><h4>Current Price:-  Rs. 268/-</h4></div>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <img src={imgg} className="pro_img" width={250} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <BidAsk/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Product

