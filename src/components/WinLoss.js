import React from 'react'
import './WinLoss.css'

const WinLoss = ({ winloss }) => {
    if (!winloss) return null;
    console.log(winloss)
    return (
    <div className="winloss">
        {` Wins: ${winloss.win}  Loss: ${winloss.lose} Win Rate: ${(winloss.win/(winloss.win + winloss.lose)).toFixed(4)*100}%`}
    </div>
    )
  }
  

export default WinLoss