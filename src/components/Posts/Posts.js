import React, {  useEffect, useState } from 'react';
import MyCard from '../MyCard/MyCard';
import 'bootstrap/dist/css/bootstrap.css';


const Posts = () => {
    const [allPosts, setAllPosts] = useState([]);
    let temp = true;
    const tempAllPosts = window.sessionStorage.getItem('allPosts');
    if (tempAllPosts == null) {
        temp = true;
    } else {
        temp = false;
        const check = JSON.parse(tempAllPosts);
        const me = () => {setAllPosts(JSON.parse(check));}
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setAllPosts(data))
        const check = JSON.stringify(allPosts);
        window.sessionStorage.setItem('allPosts', JSON.stringify(check));
    }, []);
    console.log('hi');
    console.log(allPosts);
    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {
                allPosts.map((eachPost) =>
                    <MyCard eachPost={eachPost}></MyCard>
                )
            }
        </div>
    );
};

export default Posts;