import React from 'react'
import './WinLoss.css'

const WinLoss = ({ winLoss }) => {
    if (!winLoss) return null;
    return (
    <div className="winLoss">
        W: <span className="winCount">{winLoss.win}</span>  L: <span className="lossCount">{winLoss.lose}</span>, Win Rate: {(winLoss.win/(winLoss.win + winLoss.lose)*100).toFixed(2)}%
    </div>
    )
  }
  

export default WinLoss