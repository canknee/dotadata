import React from 'react';
import Table from 'react-bootstrap/Table';
import heroList from '../helpers/HeroList';
import getHeroImageUrl from '../helpers/imageHeroUrls';

const TableTeamResults = ({ players, tableTitle }) => {
    return players.length > 0 && (
        <>
            {tableTitle}
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Player</th>
                    <th>Level</th>
                    <th>K / D / A</th>
                    <th>LH / D</th>
                    <th>Net Worth</th>
                    <th>GPM / XPM</th>
                    </tr>
                </thead>
                <tbody>
                {players.map(({hero_id, personaname, level, kills, deaths, assists, last_hits, denies, net_worth, gold_per_min, xp_per_min}) => {
                    const hero = heroList.find((hero) => hero.id===hero_id);

                    return (
                        <tr>
                            <td><img className="heroIconImages" src={getHeroImageUrl(hero.name, 'small')}></img>{personaname || ' [Anonymous]'}</td>
                            <td>{level}</td>
                            <td>{`${kills} / ${deaths} / ${assists}`}</td>
                            <td>{`${last_hits} / ${denies}`}</td>
                            <td>{net_worth}</td>
                            <td>{`${gold_per_min} / ${xp_per_min}`}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </>
    );
};

export default TableTeamResults;
