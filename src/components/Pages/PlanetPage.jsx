import React from 'react';
import { PlanetList } from '../SwComponents/ItemLists';
import { withRouter } from 'react-router';

const PlanetPage = ({ history }) => {
    return (
        <PlanetList onItemSelected={(itemId) => {
            history.push(itemId)
        }} />
    )
}

export default withRouter(PlanetPage);