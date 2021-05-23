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
                    <Order fir="25" sec="120"/>
                    <Order fir="100" sec="62"/>
                    <Order fir="250" sec="94"/>
                    <Order fir="50" sec="250"/>
                    <Order fir="60" sec="300"/>
                    <Order fir="20" sec="90"/>
                    
                       
                    </ul>
                </div>
                <div className="col-6">
                    <ul id="second-team-player">
                    <Order fir="60" sec="125"/>
                    <Order fir="110" sec="70"/>
                    <Order fir="260" sec="97"/>
                    <Order fir="20" sec="260"/>
                    <Order fir="920" sec="310"/>
                    <Order fir="40" sec="95"/>
                    </ul>
                </div>

                </div>
                
            </div>
        )
    }

}

export default BidAsk

