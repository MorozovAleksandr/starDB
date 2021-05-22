import './App.css';

import Header from '../Header/Header.js'
import RandomPlanet from '../RandomPlanet/RandomPlanet.js'
import ItemList from '../ItemList/ItemList.js'
import PersonDetails from '../PersonDetails/PersonDetails.js'


const App = () => {
    return (
        <div>
            <Header />
            <div className="col-md-6 mt-4">
                <RandomPlanet />
            </div>
            <div className="col-md-6 mt-4">
                <ItemList />
            </div>
            <div className="col-md-6 mt-4">
                <PersonDetails />
            </div>
        </div>
    )
}

export default App;