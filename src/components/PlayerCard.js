import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player, winloss }) => {
  if (!player) return null;
  console.log(player)
  return (
    <div className="playerInfo">
      <img src={player.profile.avatarmedium} alt="player avatar" />
      <a target="_blank" rel="noreferrer" href={player.profile.profileurl} className="playerName">
        <h2>{player.profile.personaname}</h2>
      </a>
      <p className="mmr">MMR: {player.mmr_estimate.estimate}</p>
    </div>
  )
}

export default PlayerCard;