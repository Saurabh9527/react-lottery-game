import React from 'react'
import './Button.css';

function Button({action}) {
    return (
        <button onClick={action}>Buy New Ticket</button>
    )
}

export default Button
