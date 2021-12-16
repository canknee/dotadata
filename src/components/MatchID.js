import React from 'react';
import heroList from './HeroList';

const MatchID = ({ match, heroes }) => {
    if (!match) return null;
    var minutes = Math.floor(match.duration / 60);
    var seconds = ('0' + match.duration % 60).slice(-2)
    return (
        <div>
            <p>Match Details: </p>
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
        </div>
    )
  }

export default MatchID;

