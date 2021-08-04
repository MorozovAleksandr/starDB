import React from 'react';
import PersonDetails from '../SwComponents/PersonDetails';
import RowLeftRight from '../RowLeftRight/RowLeftRight';
import { PersonList } from '../SwComponents/ItemLists';
import { withRouter } from 'react-router';

const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    return (
        <RowLeftRight
            left={<PersonList onItemSelected={(id) => {
                return history.push(id);
            }} />}
            right={<PersonDetails itemId={id} />}
        />
    )
}

export default withRouter(PeoplePage);