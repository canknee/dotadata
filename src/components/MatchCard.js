import React from 'react';
import './MatchCard.css';
import heroList from './HeroList';

const MatchCard = ({ matches, numOfResults }) => {
  if (!matches) return null;
  console.log(matches)

  const shortenMatches = matches.slice(0,numOfResults)

    return (
        <div>
            <p>Recent matches: </p>
            {shortenMatches.map(({match_id, kills, deaths, assists, player_slot, radiant_win, duration, gold_per_min, xp_per_min, last_hits, hero_damage, hero_id}) => {
                var team = '';
                if (player_slot <= 127) team = 'Radiant';
                if (player_slot >= 128) team = 'Dire';
                var minutes = Math.floor(duration / 60);
                var seconds = ('0' + duration % 60).slice(-2)
                return (
                    <div className='matches'>
                        Match ID: <a target="_blank" rel="noreferrer" href={`https://www.opendota.com/matches/${match_id}`} className="matches"> {match_id}</a>
                        <div className='kda'>
                            {` Kills: ${kills}, Deaths: ${deaths}, Assists: ${assists} KDA ratio: ${((kills+assists)/deaths).toFixed(1)} `}
                        </div>
                        <div className="result">
                            {` Team: ${team}, Match outcome: ${(radiant_win && team==='Radiant')|(!radiant_win && team==='Dire') ? 'Win' : 'Loss'} `}
                        </div>
                        <div className="time">
                            {` Game length: ${minutes + ':' + seconds}, Hero: ${heroList.find((hero) => hero.id===hero_id).localized_name}, GPM: ${gold_per_min}, XPM: ${xp_per_min}, LH: ${last_hits}, Damage Dealt: ${hero_damage} `}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default MatchCard;

// `${result['color 5'] ? 'color 5 exists!' : 'color 5 does not exist!'}`
