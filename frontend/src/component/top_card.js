import React from 'react'
import fir from '../images/fruit/Acai Berry = काला जामुन.jpg'

import '../css/topdeals.css'

export default function Top_card() {
    return (
        <div class="col my-1 card_margin">
            <div class="my_card" data-val="Laptops">
                <div class="container">
                    <div class="row">
                        <h6 class="card_heading">Top Deals of days</h6>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col">
                            <div>
                                <img src={fir}class="card_image" alt="images" />
                                <h6 class="card_item_text">Dell Laptop</h6>
                                <h6 class="card_item_text">Rs.65000/-</h6>
                            </div>
                        </div>
                        <div class="col">
                            <img src={fir}class="card_image" alt="" />
                            <h6 class="card_item_text">Hp Laptop</h6>
                            <h6 class="card_item_text">Rs.35000/-</h6>

                        </div>
                        <hr />
                    </div>
                    <div class="row">
                        <div class="col">
                            <img src={fir} class="card_image" alt="" />
                            <h6 class="card_item_text">Asus Laptop</h6>
                            <h6 class="card_item_text">Rs.49000/-</h6>

                        </div>
                        <div class="col">
                            <img src={fir}class="card_image" alt="" />
                            <h6 class="card_item_text">Apple Laptop</h6>
                            <h6 class="card_item_text">Rs.1,55,000/-</h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
