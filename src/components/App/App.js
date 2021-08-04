import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import RandomPlanet from '../RandomPlanet/RandomPlanet.js';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapiServiceContext/swapiServiceContext';
import PeoplePage from '../Pages/PeoplePage';
import StarshipPage from '../Pages/StarshipPage';
import PlanetPage from '../Pages/PlanetPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import StarshipDetails from '../SwComponents/StarshipDetails';
import PlanetDetails from '../SwComponents/PlanetDetails';
import LoginPage from '../Pages/LoginPage';
import SecretPage from '../Pages/SecretPage';


class App extends React.Component {

    swapiService = new SwapiService();

    state = {
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        return (
            <div>
                <SwapiServiceProvider value={this.swapiService}>
                    <BrowserRouter>
                        <Header />
                        <div className="container mt-4">
                            <RandomPlanet updateInterval={10000} />
                            <Switch>
                                <Route path='/' exact render={() => <h2 className="mt-4">Welcome to starDB</h2>} />
                                <Route path='/people/:id?' component={PeoplePage} />
                                <Route path='/starships' component={StarshipPage} />
                                <Route path='/planets' exact component={PlanetPage} />
                                <Route path='/planets/:id' render={({ match }) => {
                                    const { id } = match.params;
                                    return <PlanetDetails itemId={id} />
                                }} />
                                <Route path='/login' render={() => {
                                    return <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin} />
                                }} />

                                <Route path='/secret' render={() => {
                                    return <SecretPage isLoggedIn={this.state.isLoggedIn} />
                                }} />
                                <Route render={() => <p>page not found</p>} />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </div>
        )
    }
}

export default App;