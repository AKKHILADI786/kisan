import axios from 'axios'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'
import UserInfo from './userInfo'

class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    done(){
        console.log('done called')
    }



    render() {
        let data=JSON.parse(window.sessionStorage.order_user);
        console.log(data)
        return (
            <div>
                <div className="containe container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="car carr card ">
                            <div className="card-header">
                                <h3>Buyer Information</h3>

                            </div>
                            <div className="card-body">
                                <div>
                                    <UserInfo calll="Name" val={data.name}/>
                                    <UserInfo calll="Phone" val={data.phone}/>
                                    <UserInfo calll="Email" val={data.email}/>
                                    <UserInfo calll="Address" val={data.address}/>
                                    <UserInfo calll="City" val={data.city}/>
                                    <UserInfo calll="State" val={data.state}/>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex my-2 justify-content-center links">
                                    <Link to="/" type="submit" value="Remove" id="logg" className="btn float-end login_btn mx-3" >Remove</Link>
                                    <input type="submit" onClick={()=>this.done()} value="Add" id="logg" className="btn float-end login_btn" />

                                </div>
                                <div className="d-flex justify-content-center">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default Checkout
