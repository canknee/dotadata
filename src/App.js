import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';
import MatchCard from './components/MatchCard';
import WinLoss from './components/WinLoss'
import logo from './logo.svg';
import './App.css';

// 76561198350848550 64bit tho
// 76561198067021926
// 76561197960265728

// 390582822 cabeezy
// 106756198 citius
// 96502423 cam

const App = () => {

  const [playerId, setPlayerId] = useState('');
  const [player, setPlayer] = useState('');
  const [winloss, setWinLoss] = useState('');
  const [matches, setMatches] = useState('');
  const [heroes, setHeroes] = useState('');

  const getPlayer = (playerId) => {
    if(!playerId) return;
    fetch(`/players/${playerId}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then((data) => {
      setPlayer(data);
    })
    .catch(err => {
      throw new Error(err)
    });
  };

  const getWinLoss = (playerId) => {
    if(!playerId) return;
    fetch(`/players/${playerId}/wl`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then((data) => {
      setWinLoss(data);
    })
    .catch(err => {
      throw new Error(err)
    });
  };  

  const getMatches = (playerId) => {
    if(!playerId) return;
    fetch(`/players/${playerId}/recentMatches`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then((data) => {
      setMatches(data);
    })
    .catch(err => {
      throw new Error(err)
    });
  };

  const getHeroes = () => {
    fetch(`/Heroes`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then((data) => {
      setHeroes(data);
    })
    .catch(err => {
      throw new Error(err)
    });
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DotaData
        </p>
        <form onSubmit={(e) => {
          e.preventDefault();
          getPlayer(playerId);
          getMatches(playerId);
          getWinLoss(playerId);
          getHeroes();
        }}>
          <label>Player ID:</label>
          <br />
          <input 
            name='playerId' 
            type='text'
            value={playerId}
            onChange={e => setPlayerId(e.target.value)}
          />
          <input className="getPlayerButton" type='submit' value="Get Player" />
        </form>
      </header>
      <PlayerCard player={player} />
      <WinLoss winloss={winloss}/>
      <MatchCard  matches={matches} heroes={heroes} numOfResults={5} />

    </div>
  );
}

export default App;
