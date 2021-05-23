import axios from 'axios'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/login.css'
import '../css/placeorder.css'



class PlaceOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: '',
            price: '',
            type: '',
            productId: '',
            userId: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        
        let pro = JSON.parse(window.sessionStorage.product);
        let data;
        let productId;
        let userId;
        if (!window.sessionStorage.user) {
            window.alert('please login first')
            window.location = '/login';
        }
        else {
            data = JSON.parse(window.sessionStorage.user);
            productId = pro.id;
            userId = data.id;
            
        }
        console.log(productId, userId);

        this.setState({
            type: e.target.value,
            userId:userId,
            productId:productId
        })
        setTimeout(() => {
            axios.post('/order/',this.state)
                .then((result)=>{
                    let data=result.data
                    console.log(data);
                })
            
        }, 500);

        
    }




    render() {
        const { quantity, price } = this.state;
        





        return (
            <div>
                <div className="containe container">
                    <div className="d-flex justify-content-center ">
                        <div className="car pro_car card">
                            <div className="card-header">


                            </div>
                            <div className="card-body pro_body">
                                <form onSubmit={this.submitHandler}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text  name_box"><i className="fa fa-user" aria-hidden="true"></i></span>
                                        </div>
                                        <input type="text" name="quantity" value={quantity} onChange={this.changeHandler} className="form-control" id="username" placeholder="Quantity (kgs.)" />

                                    </div>
                                    <div className="input-group form-group my-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text  name_box"><i className="fa fa-key" aria-hidden="true"></i></span>
                                        </div>
                                        <input type="text" name="price" value={price} onChange={this.changeHandler} className="form-control" id="password" placeholder="Price (Per Kgs.)" />
                                    </div>
                                    <div className="row align-items-center remember my-2">

                                    </div>
                                    <div className="form-group my-2 ">
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer pro_footer">
                                <div className="d-flex my-2 justify-content-center links">
                                    <input type="submit" name="buy" onClick={this.submitHandler} value="Buy" id="logg" className="btn float-end login_btn mx-3" />
                                    <input type="submit" name="sell" onClick={this.submitHandler} value="Sell" id="logg" className="btn float-end login_btn" />
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
