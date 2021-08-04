import React from 'react';
import { Redirect } from 'react-router';

const SecretPage = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return <div>This page is full of secrets!</div>
    }

    return <Redirect to="/login" />
}

export default SecretPage;