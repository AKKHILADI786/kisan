import React from 'react'

export default function Order({fir,sec}) {
    return (
        <li className="added_player ">
            <span className="float-start">{fir} (Kgs)</span>
            <span className="float-end">Rs.{sec}/-</span>
        </li>
    )
}
