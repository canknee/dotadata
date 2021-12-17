/* global BigInt */
import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';
import MatchCard from './components/MatchCard';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MatchId from './components/MatchId'
import './App.css';

// 76561198067021926 64 bit example, conversion to 32 works

// 390582822 cabeezy
// 106756198 citius
// 96502423 cam

// match
// 6320960526

const App = () => {

  const [playerId, setPlayerId] = useState('');
  const [player, setPlayer] = useState('');
  const [winLoss, setWinLoss] = useState('');
  const [matches, setMatches] = useState(''); // for match details from playerID
  const [match, setMatch] = useState(''); // for match details from matchID
  const [matchId, setMatchId] = useState('');



  const standardize32 = (bigNum) => {
    return BigInt(bigNum) < BigInt("76561197960265728") ? bigNum : BigInt(bigNum) - BigInt("76561197960265728");
  }

  const getPlayer = (playerId) => {
    if(!playerId) return;
    fetch(`/players/${standardize32(playerId)}`).then(
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
    fetch(`/players/${standardize32(playerId)}/wl`).then(
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

  // Function for getting match details via player's recent matches
  const getMatches = (playerId) => {
    if(!playerId) return;
    fetch(`/players/${standardize32(playerId)}/recentMatches`).then(
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

  // Function for getting match via match ID
  const getMatch = (matchId) => {
    if(!matchId) return;
    fetch(`/matches/${matchId}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then((data) => {
      setMatch(data);
    })
    .catch(err => {
      throw new Error(err)
    });
  };

  const [isPlayer, setIsPlayer] = useState(true);
  const formIsPlayer = (isPlayer) => {
    if (isPlayer) {
      return(
        <div>
        <PlayerCard player={player} winLoss={winLoss} />
        <hr />
        <MatchCard  matches={matches} numOfResults={6} />
        </div>
        )
    } else {
      return (
        <div>
          <MatchId match={match} />
        </div>
      )
    }
  }


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid="xl">
          <Navbar.Brand href="/">DotaData</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Sign in</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        {/* Form for players */}
        <form onSubmit={(ev) => {
          ev.preventDefault();
          getPlayer(playerId);
          getMatches(playerId);
          getWinLoss(playerId);
          setIsPlayer(true);
        }}>
          <label>Player ID:</label>
          <input
            className="textInput"
            name='playerId' 
            type='text'
            value={playerId}
            onChange={ev => setPlayerId(ev.target.value)}
          />
          <input className="submitButton" type='submit' value="Get Player" />
        </form>

        {/* Form for matches */}
        <form onSubmit={(ev) => {
          ev.preventDefault();
          getMatch(matchId);
          setIsPlayer(false)
        }}>
          <label>Match ID:</label>
          <input
            className="textInput"
            name='matchId' 
            type='text'
            value={matchId}
            onChange={ev => setMatchId(ev.target.value)}
          />
          <input className="submitButton" type='submit' value="Get Match" />
        </form>
        {formIsPlayer(isPlayer)}
      </main>
    </div>
  );
}

export default App;
