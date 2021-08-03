import React from 'react';
import StarshipDetails from '../SwComponents/StarshipDetails';
import RowLeftRight from '../RowLeftRight/RowLeftRight';
import { StarshipList } from '../SwComponents/ItemLists';

class StarshipPage extends React.Component {

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
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails itemId={selectedItem} />}
            />
        )
    }
}

export default StarshipPage;