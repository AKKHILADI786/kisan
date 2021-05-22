import React, { Component } from 'react'
import '../css/cart.css'
import '../css/BidAsk.css'
import Order from './order'
class BidAsk extends Component {
    render() {
        return (
            <div className="container cardd">
                <div className="row top_row">
                    <div className="col-6 d-flex justify-content-center  border border-success">Bid</div>
                    <div className="col-6 d-flex justify-content-center  border border-success">Ask</div>
                    
                </div>
                <div className="row  top_row">
                    <div className="col-3 d-flex justify-content-center border border-success">Quantity</div>
                    <div className="col-3 d-flex justify-content-center  border border-success">Price</div>
                    <div className="col-3 d-flex justify-content-center  border border-success">Quantity</div>
                    <div className="col-3 d-flex justify-content-center  border border-success">Price</div>
                </div>

                <div className="row">
                <div className="col-6">
                    <ul id="first-team-player">
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                       
                    </ul>
                </div>
                <div className="col-6">
                    <ul id="second-team-player">
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    </ul>
                </div>

                </div>
                
            </div>
        )
    }

}

export default BidAsk

