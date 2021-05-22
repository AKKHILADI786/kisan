import React, { Component } from 'react'
import '../css/cart.css'


class Profile extends Component {
    render() {
        return (
            <div>
                <div className="containe container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="car card">
                            <div className="card-header">
                                <div className="container">
                                    <div className="row">
                                        <div className="col"><h3>Product</h3></div>
                                        <div className="col">
                                            
                                            <button className="btn btn-warning float-end mx-2" id="add_product"><i className="fa fa-plus" aria-hidden="true"></i>Sell</button>
                                        <button className="btn btn-warning float-end " id="add_product"><i className="fa fa-plus" aria-hidden="true"></i> Buy</button></div>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="card-body heading">
                                <div className="container  cart border border-success" id="product_items">
                                    <div className="row main_heading">
                                        <div className="col-md-1 py-2 text-center border border-success">
                                            Sr.no
                        </div>
                                        <div className="col-md-2  py-2 text-center  border border-success">
                                            Product
                        </div>
                                        <div className="col-md-5  py-2 text-center  border border-success">
                                            Product Details
                        </div>
                                        <div className="col-md-2  py-2 text-center border border-success">
                                            Quantity
                        </div>
                                        <div className="col-md-2 py-2  text-center border border-success">
                                            Price
                        </div>

                                    </div>
                                    <div className="row items">
                                        <div
                                            className="col-md-1 border text-center  d-flex align-items-center justify-content-center border-success">
                                            1
                        </div>
                                        <div className="col-md-2 border d-flex align-items-center justify-content-center  border-success">
                                            <div className="p-1">
                                                <img src="/images/mobile/mi/1 (2).jpeg" className="cart_image float-center" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-5 border  d-flex align-items-center justify-content-center  border-success">
                                            <div>
                                                <div className="text-center">Product Details</div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button className="btn btn-outline-warning remove"><span id="remove_text">Remove</span></button>
                                                </div>
                                            </div>

                                        </div>

                                        <div
                                            className="col-md-2 border text-center border-success justify-content-center d-flex align-items-center">
                                            1
                        </div>
                                        <div
                                            className="col-md-2 border text-center border-success justify-content-center d-flex align-items-center">
                                            Rs.8000 /-
                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="card-footer">
                                <div className="card-header">
                                    <h3>Orders</h3>
                                </div>
                                <div className="card-body heading">
                                    <div className="container  cart border border-success">
                                        <div className="row main_heading">
                                            <div className="col-md-1 py-2 text-center border border-success">
                                                Sr.no
                            </div>
                                            <div className="col-md-2  py-2 text-center  border border-success">
                                                Product
                            </div>
                                            <div className="col-md-3  py-2 text-center  border border-success">
                                                Product Details
                            </div>
                                            <div className="col-md-2  py-2 text-center border border-success">
                                                Quantity
                            </div>
                                            <div className="col-md-2 py-2  text-center border border-success">
                                                Price
                            </div>
                                            <div className="col-md-2 py-2 text-center  border border-success">
                                                Total
                            </div>
                                        </div>
                                        <div className="row items">
                                            <div
                                                className="col-md-1 border text-center  d-flex align-items-center justify-content-center border-success">
                                                1
                            </div>
                                            <div className="col-md-2 border d-flex align-items-center justify-content-center  border-success">
                                                <div className="p-1">
                                                    <img src="images/card/4.jpg" className="cart_image float-center" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 border  d-flex align-items-center justify-content-center  border-success">
                                                <div>
                                                    <div className="text-center">Product Details</div>
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <button className="btn btn-outline-warning remove"><span id="remove_text">Done</span></button>
                                                    </div>
                                                </div>

                                            </div>

                                            <div
                                                className="col-md-2 border text-center border-success justify-content-center d-flex align-items-center">
                                                1
                            </div>
                                            <div
                                                className="col-md-2 border text-center border-success justify-content-center d-flex align-items-center">
                                                Rs.8000 /-
                            </div>
                                            <div
                                                className="col-md-2 border text-center  d-flex justify-content-center align-items-center border-success">
                                                Rs.8552 /-
                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Profile