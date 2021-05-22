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




    render() {

        return (
            <div>
                <div className="containe container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="car card ">
                            <div className="card-header">
                                <h3>User Information</h3>

                            </div>
                            <div className="card-body">
                                <div>
                                    <UserInfo calll="Name" val="Ramesh"/>
                                    <UserInfo calll="Phone" val="987654321"/>
                                    <UserInfo calll="Email" val="ajaynager@gmail.com"/>
                                    <UserInfo calll="City" val="Ludhiana"/>
                                    <UserInfo calll="State" val="Punjab"/>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex my-2 justify-content-center links">
                                    <input type="submit" value="Remove" id="logg" className="btn float-end login_btn mx-3" />
                                    <input type="submit" value="Add" id="logg" className="btn float-end login_btn" />

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
