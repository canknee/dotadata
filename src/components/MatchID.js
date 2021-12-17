import React from 'react';
import TableTeamResults from './TableTeamResults';
import './MatchId.css';
import { Table } from 'react-bootstrap';

const MatchId = ({ match }) => {
    if (!match) return null;
    const minutes = Math.floor(match.duration / 60);
    const seconds = ('0' + match.duration % 60).slice(-2);
    const winner = match.radiant_win ? 'Radiant' : 'Dire';
    const playersRadiant = match.players.filter(player => player.player_slot <= 127);
    const playersDire = match.players.filter(player => player.player_slot > 127);
    
    return (
        <div>
            <h3>Match Details</h3>
            <div className="fullMatchCard">
                <div className="headerSection">
                    <div className="matchWinnerWrapper">
                        <div className={"matchWinner " + winner}>
                            {winner + ' Victory'}
                        </div>
                    </div>
                    <div className="matchScore">
                        <span className="Radiant">{match.radiant_score}</span> - <span className="Dire">{match.dire_score}</span>
                        <div className="matchLength">
                            {minutes + ':' + seconds}
                        </div>
                    </div>
                    <div className="matchGeneralInfo">
                        ID: <a target="_blank" rel="noreferrer" href={`https://www.opendota.com/matches/${match.match_id}`} className="match">{match.match_id}</a>{' '}
                        / {match.region===1 ? ' USW ' : ' USE '}
                        / {(match.skill===1) ? (` Normal${'\u00A0'}skill`) : ((match.skill===2) ? (` High${'\u00A0'}skill`) : (` Very${'\u00A0'}High${'\u00A0'}Skill`))}
                    </div>
                </div>
                <div className="tableSection">
                    <TableTeamResults players={playersRadiant} tableTitle="Radiant" />
                    <TableTeamResults players={playersDire} tableTitle="Dire" />
                </div>
            </div>
        </div>
    )
  }

export default MatchId;

