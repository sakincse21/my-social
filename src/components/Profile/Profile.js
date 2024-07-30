import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Profile = () => {
    const {id}=useParams();
    return (
        <div>
            <h1>this is profile {id}</h1>
        </div>
    );
};

export default Profile;