import React from 'react';
import WinLoss from './WinLoss'
import './PlayerCard.css';

const PlayerCard = ({ player, winLoss }) => {
  if (!player) return null;
  console.log(player)
  return (
    <div className="playerInfo">
      <img className="playerAvatar" src={player.profile.avatarfull} alt="player avatar" />
      <a target="_blank" rel="noreferrer" href={player.profile.profileurl} className="playerName">
        <h2 className="playerName">{player.profile.personaname}</h2>
      </a>
      <p className="mmr">MMR: {player.mmr_estimate.estimate}</p>
      <WinLoss winLoss={winLoss} />
    </div>
  )
}

export default PlayerCard;