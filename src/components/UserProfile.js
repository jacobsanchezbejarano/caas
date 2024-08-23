import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function UserProfile() {
    const { state, updateUser } = useContext(GlobalContext);

    return (
        <div>
            <h1>User Profile</h1>
            {state.user ? (
                <p>Welcome, {state.user.name}!</p>
            ) : (
                <p>No user logged in</p>
            )}
            <button onClick={() => updateUser({ name: 'John Doe' })}>Log In</button>
        </div>
    );
}

export default UserProfile;
