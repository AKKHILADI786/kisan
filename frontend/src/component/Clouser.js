import React from 'react'
import fir from '../images/1.jpg'
import sec from '../images/2.jpg'
import thi from '../images/3.jpg'
import BidAsk from './BidAsk'
import TopDeals from './TopDeals'

export default function Clouser() {
    return (
        <div>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={thi} height="350px" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="kge_heading">Kisan Goods Exchange</h5>
                        <button type="button" className="btn btn-success btnn buy">Buy</button>
                        <button type="button" className="btn btn-danger btnn sell">Sell</button>

                    </div>
                </div>
                <div className="carousel-item">
                <img src={sec} height="350px" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="kge_heading">Kisan Goods Exchange</h5>
                        <button type="button" className="btn btn-success btnn buy">Buy</button>
                        <button type="button" className="btn btn-danger btnn sell">Sell</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={fir} height="350px" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="kge_heading">Kisan Goods Exchange</h5>
                        <button type="button" className="btn btn-success btnn buy">Buy</button>
                        <button type="button" className="btn btn-danger btnn sell">Sell</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            
        </div>
        
        <div className="row cousel_bot bg-success">
            <span>Todays Deals</span>
        </div>
        <TopDeals/>
        <BidAsk/>
        <TopDeals/>
        <TopDeals/>
        </div>
    )
}
