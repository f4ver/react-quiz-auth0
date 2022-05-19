import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div>
                <h1 class = "q_title">Simple HTML Quiz</h1>
            <button class = "loginBtn" onClick={() => loginWithRedirect()}>
                Войти
            </button>
            </div>
        )
    )
}

export default LoginButton
