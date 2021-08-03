import React from 'react';
import PlanetDetails from '../SwComponents/PlanetDetails';
import RowLeftRight from '../RowLeftRight/RowLeftRight';
import { PlanetList } from '../SwComponents/ItemLists';

class PlanetPage extends React.Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const { selectedItem } = this.state;

        return (
            <RowLeftRight
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={selectedItem} />}
            />
        )
    }
}

export default PlanetPage;