import React from 'react'

export default function UserInfo(props) {
    return (
        <li className="added_player row">
            <div className="col-6">{props.calll}</div>
            <div className="col-6">{props.val}</div>
        </li>
    )
}
