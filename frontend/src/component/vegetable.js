import axios from 'axios'
import React, { Component} from 'react'
import {useEffect,useState} from 'react'

import { Link, Redirect } from 'react-router-dom'

import '../css/cart.css'
import '../css/Register.css'


let state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]

function getstate(){
    return state[Math.floor(Math.random)*28];
}


export default function Vegetable() {
    
        const [data,setData]=useState([]);

        useEffect(()=>{
            fetch('/product/t/vegetable')
            .then((result)=>{
                result.json().then((res)=>{
                    setData(res)
                })
            })

        },[])
       
        console.log(data);
        console.log(data.length);

        return (
            <div>
                

                <div className="containe container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="car carr card">
                            <div className="card-header">
                                <div className="container">
                                    <div className="row">
                                        <div className="col"><h3>Product</h3></div>
                                       

                                           
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
                                            State
                        </div>
                                        <div className="col-md-2 py-2  text-center border border-success">
                                            Price
                        </div>

                                    </div>
                                    
                                    {/* <div className="row items">
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
                                    </div> */}
                                    {data.map((dat)=>
                                <div className="row items">
                                <div
                                    className="col-md-1 border text-center  d-flex align-items-center justify-content-center border-success">
                                    {dat.id}
                </div>
                                <div className="col-md-2 border d-flex align-items-center justify-content-center  border-success">
                                    <div className="p-1">
                                        <img src={dat.image} className="cart_image float-center" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-5 border  d-flex align-items-center justify-content-center  border-success">
                                <div>
                                        <div className="text-center">{dat.name}</div>
                                        <div className=" d-flex align-items-center justify-content-center">

                                        <Link to="/product" onClick={()=>openfile(dat)} className="btn btn-outline-warning remove m-1"><span id="remove_text">Deals</span></Link>
                                        
                                        </div>
                                       
                                        
                                    </div>

                                </div>

                                <div
                                    className="col-md-2 border text-center border-success justify-content-center d-flex align-items-center">
                                    {state[dat.id%28]}
                </div>
                                <div
                                    className="col-md-2 border text-center border-success justify-content-center d-flex align-items-center">
                                    Rs.{dat.price} /-
                </div>
                            </div>
                                
                                )
                            }
                                </div>
                            </div>

                            <div className="card-footer">
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    

}







function openfile(data){
    // window.location='/product'
    window.sessionStorage.product=JSON.stringify(data);
}
