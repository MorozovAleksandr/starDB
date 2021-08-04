import React from 'react';
import { Redirect } from 'react-router';

const LoginPage = ({ isLoggedIn, onLogin }) => {

    if (isLoggedIn) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <p>
                Login to see secret page
            </p>
            <button onClick={onLogin}>Loggin</button>
        </div>
    )
};

export default LoginPage;