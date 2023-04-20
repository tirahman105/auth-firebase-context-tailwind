import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <h2>This is home </h2>
            <h1>{user && <span>{user.displayName}</span> }</h1>
        </div>
    );
};

export default Home;