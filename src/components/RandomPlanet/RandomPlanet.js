import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service.js';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import './RandomPlanet.css';

class RandomPlanet extends React.Component {

    static defaultProps = {
        updateInterval: 10000
    }

    static propTypes = {
        updateInterval: PropTypes.number
    }

    swapiService = new SwapiService();

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    state = {
        planet: {},
        loading: true,
        error: false
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        return (
            <div className="random-planet jumbotron rounded card" >
                {spinner}
                {errorMessage}
                {content}
            </div>
        )
    }

}

export default RandomPlanet;

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diametr } = planet;
    return (
        <Fragment>
            <img className="planetImage"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='Planet' />
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
        </Fragment>
    )
}