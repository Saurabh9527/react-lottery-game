
import React, { useState } from 'react'
import {genTicket , sum} from './helper';
import Ticket from './Ticket.jsx';
import Button from './Button.jsx';
import './Lottery.css';

function Lottery({n=3 , winCondition}) {

    let [ticket , setTicket]=useState(genTicket(n))
    let isWinning= winCondition(ticket);

    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <br /><br />
      {/* <button onClick={buyTicket}>Buy New Ticket</button> */}
      <Button action={buyTicket} />
      <h3>{isWinning && "Congrtulations, you won !!!"}</h3>
    </div>
  )
}

export default Lottery
