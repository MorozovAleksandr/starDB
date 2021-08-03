import React from 'react';
import PersonDetails from '../SwComponents/PersonDetails';
import RowLeftRight from '../RowLeftRight/RowLeftRight';
import { PersonList } from '../SwComponents/ItemLists';

class PeoplePage extends React.Component {

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
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails itemId={selectedItem} />}
            />
        )
    }
}

export default PeoplePage;