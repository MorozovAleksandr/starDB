import React from 'react';

import SwapiService from '../../services/swapi-service.js';

import './RandomPlanet.css';


class RandomPlanet extends React.Component {

    constructor() {
        super();
        this.updatePlanet();
    }

    state = {
        planet: {}
    };

    swapiservice = new SwapiService();

    onPlanetLoaded = (planet) => {
        this.setState({ planet })
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 15) + 2;
        this.swapiservice
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        const { planet: { id, name, population, rotationPeriod, diametr } } = this.state;
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