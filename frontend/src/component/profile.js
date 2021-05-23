import React, { Component } from 'react'
import '../css/cart.css'
import '../css/Register.css'
import Element from './elements'
import Order from './profile_order'



class Profile extends Component {

    render() {
        let data=JSON.parse(window.sessionStorage.user);
        console.log(data);
        console.log(data.id)
        
        return (
            <div>
                <div className="containe container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="car carr card">
                            <div className="card-header">
                                <div className="container">
                                    <div className="row">
                                        <div className="col"><h3>{data.name}</h3></div>
                                        <div className="col">
                                            
                                            <button className="btn btn-warning float-end mx-2" id="add_product"><i className="fa fa-plus" aria-hidden="true"></i>Sell</button>
                                        <button className="btn btn-warning float-end " id="add_product"><i className="fa fa-plus" aria-hidden="true"></i> Buy</button></div>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="card-body heading">
                                <Element/>
                            </div>
                            
                            <div className="card-footer">
                                <div className="card-header">
                                    <h3>Orders</h3>
                                </div>
                                <div className="card-body heading">
                                    <Order/>
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