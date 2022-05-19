import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Start = ({ onQuizStart }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return(
    isAuthenticated && (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Начать</h1>
          <p>Удачи!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
    )
  )
}

export default Start;