import React from 'react';

import SwapiService from '../../services/swapi-service.js';

import './RandomPlanet.css';


class RandomPlanet extends React.Component {

    constructor() {
        super();
        this.updatePlanet();
    }

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diametr: null,
    };

    swapiservice = new SwapiService();

    updatePlanet() {
        const id = Math.floor(Math.random() * 15) + 2;
        this.swapiservice
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diametr: planet.diameter,
                })
            });
    }

    render() {
        const { name, population, rotationPeriod, diametr, id } = this.state;
        return (
            <div className="random-planet jumbotron rounded card" >
                <img className="planetImage"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flash">
                        <li className="list-group-item">
                            <span className="term">Population: </span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period: </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter: </span>
                            <span>{diametr}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default RandomPlanet;