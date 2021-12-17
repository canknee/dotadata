import React from 'react';
import './MatchId.css'
import heroList from '../helpers/HeroList';
// Think about doing this with a table from React bootstrap

const MatchId = ({ match, heroes }) => {
    if (!match) return null;
    var minutes = Math.floor(match.duration / 60);
    var seconds = ('0' + match.duration % 60).slice(-2)

    return (
        <div>
            <h3>Match Details</h3>
            <div className="fullMatchCard">
                <div className='match'>
                    Match ID: <a target="_blank" rel="noreferrer" href={`https://www.opendota.com/matches/${match.match_id}`} className="match"> {match.match_id} </a>
                </div>
                <div className="matchdata">
                    {` ${match.radiant_win ? 'Radiant Victory' : 'Dire Victory'} | Game length: ${minutes + ':' + seconds} | Region: ${match.region===1 ? 'USW' : 'USE'} | 
                    Skill level: ${ (match.skill===1) ? ('Normal skill') : ((match.skill===2) ? ('High skill') : ('Very High Skill'))}  `}
                </div>
                <div className="score">
                    {` Radiant: ${match.radiant_score} Dire: ${match.dire_score} `}
                </div>
                {match.players.map(({personaname, kills, deaths, assists, hero_id, last_hits, denies, player_slot}) => {
                    var team = '';
                    if (player_slot <= 127) team = 'Radiant';
                    if (player_slot >= 128) team = 'Dire';
                    return (
                        <div className="players">
                            {`${personaname} | ${team} Hero: ${heroList.find((hero) => hero.id===hero_id).localized_name} | Kills: ${kills}, Death: ${deaths}, Assists: ${assists} LH: ${last_hits}, Denies: ${denies}`}
                        </div>
                    )
                })}
            </div>   
        </div>
    )
  }

export default MatchId;

