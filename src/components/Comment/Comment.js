import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Comment = (props) => {
    const { id, name } = props.cm;
    console.log(id, name);
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const [photos, setPhotos] = useState('');
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, []);
    const thumbnail = photos.thumbnailUrl;
    const userName = user.username;
    const imgStyle = {
        width: '48px',
        borderRadius: '48px',
        margin:'5px'
    };
    return (
        <div style={{ border: '1px solid gray', margin: '8px', padding: '5px', borderRadius: '12px' }}>
            <div className="d-flex justify-content-start align-items-center flex-wrap">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={thumbnail} style={imgStyle} alt="error" />
                    <Link to={'/user/' + id}>
                        <a href={`/user/${id}`} style={{margin:'5px'}}>{userName}</a>
                    </Link>
                </div>
                <div className="" style={{margin:'5px'}}>
                    {name}
                </div>
            </div>
        </div>
    );
};

export default Comment;