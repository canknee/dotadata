import React from 'react';
import './MatchCard.css';
import heroList from './HeroList';

const MatchCard = ({ matches, numOfResults }) => {
  if (!matches) return null;
  console.log(matches)

  const shortenMatches = matches.slice(0,numOfResults)

    return (
        <div>
            <h3>Recent matches: </h3>
            <div className="matches">
            {shortenMatches.map(({match_id, kills, deaths, assists, player_slot, radiant_win, duration, gold_per_min, xp_per_min, last_hits, hero_damage, hero_id}) => {
                const team = player_slot <= 127 ? 'Radiant' : 'Dire';
                const minutes = Math.floor(duration / 60);
                const seconds = ('0' + duration % 60).slice(-2)
                const outcome = (radiant_win && team==='Radiant') || (!radiant_win && team==='Dire') ? 'Victory' : 'Defeat';
                return (
                    <div className='matchCard'>
                        <div className="matchId">ID: <a target="_blank" rel="noreferrer" href={`https://www.opendota.com/matches/${match_id}`}>{match_id}</a></div>
                        <div className="matchResult">
                            {` Team ${team}, `} <span className={'match' + outcome}>{outcome}</span>
                        </div>
                        <div className="duration">
                            {`${minutes}m ${seconds}s`}
                        </div>
                        <div className="hero">
                            {heroList.find((hero) => hero.id===hero_id).localized_name}
                        </div>
                        <div className='kda'>
                            {`K / D / A: ${kills} / ${deaths} / ${assists}`}
                        </div>
                        <div className="economy">
                            {`GPM: ${gold_per_min}, XPM: ${xp_per_min}, LH: ${last_hits}`}
                        </div>
                        <div className="damage">
                            {`Damage Dealt: ${hero_damage}`}
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    )
}
export default MatchCard;

// `${result['color 5'] ? 'color 5 exists!' : 'color 5 does not exist!'}`
