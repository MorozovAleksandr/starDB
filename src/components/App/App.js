import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import RandomPlanet from '../RandomPlanet/RandomPlanet.js';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapiServiceContext/swapiServiceContext';
import PeoplePage from '../Pages/PeoplePage';
import StarshipPage from '../Pages/StarshipPage';
import PlanetPage from '../Pages/PlanetPage';


class App extends React.Component {

    swapiService = new SwapiService();

    state = {

    }

    render() {
        return (
            <div>
                <SwapiServiceProvider value={this.swapiService}>
                    <Header />
                    <div className="container mt-4">
                        <RandomPlanet updateInterval={10000} />
                    </div>

                    <PeoplePage />

                    <StarshipPage />

                    <PlanetPage />
                </SwapiServiceProvider>
            </div>
        )
    }
}

export default App;