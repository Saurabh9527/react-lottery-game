import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Styles.css'
import Lottery from './Lottery'
import {sum} from './helper';

function App() {
  //& if the ticket number sum is 15 , You win !!!
  let winCondition=(ticket)=>{
    return sum(ticket) === 15;
  }

  //& every number must be equal
  // let winCondition=(ticket)=>{
  //   return ticket.every((num)=> num === ticket[0])
  // };

  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
