import React, { Component } from 'react'
import '../css/cart.css'
import imgg from '../images/3.jpg'
import BidAsk from './BidAsk'
import '../css/product.css'
import PlaceOrder from './placeOrder'

let x=false;
class Product extends Component {

    constructor(props){
        super(props)
        this.state={

        }
    }


    render() {
    let a=JSON.parse(window.sessionStorage.product);
        console.log(a);
        return (
            <div>
                <div className="containe container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="car carr card">
                            <div className="card-header">
                                <div className="container">
                                    <div className="row top_bar">
                                        <div className="col">
                                            <div className="row"><h3>{a.name}</h3></div>
                                            <div className="row"><h4>Uttar pardesh</h4></div>
                                            <div className="row"><h4>Current Price:-  Rs. {a.price}/-</h4></div>
                                            <button  className="btn btn-warning"> Buy & Sell</button>

                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <img src={a.image} className="pro_img" width={250} height={200} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            

                            <PlaceOrder product={a}/>
                            <BidAsk/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Product

