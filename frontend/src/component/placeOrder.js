import axios from 'axios'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'

class PlaceOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post('/user/login', this.state)
            .then(data => {
                if (data.Error) {
                    window.alert(`${data.Error}`)
                }
                else {
                    window.sessionStorage.user = true;
                    window.alert('Login successfully')
                    window.location = '/';

                }
            })
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <div className="containe container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="car card">
                            <div className="card-header">
                                <h3>Product Name</h3>

                            </div>
                            <div className="card-body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text  name_box"><i className="fa fa-user" aria-hidden="true"></i></span>
                                        </div>
                                        <input type="text" name="username" value={username} onChange={this.changeHandler} className="form-control" id="username" name="username" placeholder="Quantity" />

                                    </div>
                                    <div className="input-group form-group my-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text  name_box"><i className="fa fa-key" aria-hidden="true"></i></span>
                                        </div>
                                        <input type="password" name="password" value={password} onChange={this.changeHandler} className="form-control" id="password" name="password" placeholder="Price" />
                                    </div>
                                    <div className="row align-items-center remember my-2">
                                        
					</div>
                                    <div className="form-group my-2 ">
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex my-2 justify-content-center links">
                                <input type="submit" value="Buy" id="logg" className="btn float-end login_btn mx-3" />
                                <input type="submit" value="Sell" id="logg" className="btn float-end login_btn" />
                                    
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



export default PlaceOrder
