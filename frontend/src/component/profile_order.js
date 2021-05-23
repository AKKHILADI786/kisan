import axios from 'axios'
import React, { Component } from 'react'
import { useEffect, useState } from 'react'

import { Link, Redirect } from 'react-router-dom'

import '../css/cart.css'
import '../css/Register.css'




export default function Order(props) {

    const [data, setData] = useState([]);

    let dat=JSON.parse(window.sessionStorage.user);
    let userid=dat.id;

    useEffect(() => {
        fetch(`/cart/${userid}`)
            .then((result) => {
                result.json().then((res) => {
                    console.log(res)
                    setData(res)
                })
            })

    }, [])

    console.log(data);
    console.log(data.length);


    return (

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

            
            {data.map((dat) =>
                <div className="row items">
                    <div
                        className="col-md-1 border text-center  d-flex align-items-center justify-content-center border-success">
                        {dat.id}

                    </div>
                    <div className="col-md-2 border d-flex align-items-center justify-content-center  border-success">
                        <div className="p-1">
                            <img src={dat.product.image} className="cart_image float-center" alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 border  d-flex align-items-center justify-content-center  border-success">
                        <div>
                            <div className="text-center">{dat.product.name}</div>
                            <div className=" d-flex align-items-center justify-content-center">

                                <button onClick={() => openfile(dat.user)} className="btn btn-outline-warning remove m-1"><span id="remove_text">Proceed</span></button>

                            </div>


                        </div>

                    </div>

                    <div
                        className="col-md-2 border text-center border-success justify-content-center d-flex align-items-center">
                        {dat.order.quantity}
                    </div>
                    <div
                        className="col-md-2 border text-center border-success justify-content-center d-flex align-items-center">
                        Rs.{dat.order.price} /-
                </div>
                </div>

            )
            }
        </div>

    )


}



function openfile(data) {
    window.sessionStorage.order_user = JSON.stringify(data);
    window.location = '/checkout'
}