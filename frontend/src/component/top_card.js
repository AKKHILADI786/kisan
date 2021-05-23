import React from 'react'
import fir from '../images/fruit/Acai Berry = काला जामुन.jpg'

import '../css/topdeals.css'

export default function Top_card({val1,val,val2,val3}) {
    
    return (
        <div class="col my-1 card_margin">
            <div class="my_card" data-val="Laptops">
                <div class="container">
                    <div class="row">
                        <h6 class="card_heading text-center">Top Deals of days</h6>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col">
                            <div>
                                <img src={val} class="card_image" alt="images" />
                                <h6 class="card_item_text">Fruits</h6>
                                <h6 class="card_item_text">30%off</h6>
                            </div>
                        </div>
                        <div class="col">
                            <img src={val1}  class="card_image" alt="" />
                            <h6 class="card_item_text">Fruits</h6>
                            <h6 class="card_item_text">30%off</h6>

                        </div>
                        <hr className="card_hr"/>
                    </div>
                    <div class="row">
                        <div class="col">
                            <img src={val2} class="card_image" alt="" />
                            <h6 class="card_item_text">Vegetable</h6>
                            <h6 class="card_item_text">40%off</h6>

                        </div>
                        <div class="col">
                            <img src={val3} class="card_image" alt="" />
                            <h6 class="card_item_text">Vegetable</h6>
                            <h6 class="card_item_text">40%off</h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
