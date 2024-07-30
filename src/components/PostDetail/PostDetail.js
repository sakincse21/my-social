import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Comment from '../Comment/Comment';
//import Posts from 'components/Posts/Posts';


const PostDetail = () => {
    const {id}=(useParams());
    const [post, setPost]=useState({});
    const [comments, setComments]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[]);
    const commentLink=`https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    useEffect(()=>{
        fetch(commentLink)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[]);
    const {userId,title,body}=post;
    // console.log(userId,title,body);
    console.log(comments);
    return (
        <div>
            <hr />
            <h1 className='my-3'>{title}</h1>
            <hr />
            <p className='my-3 py-3'>{body} <hr /> </p>
            {
                comments.map(cm =>
                        <Comment cm={cm} key={id}></Comment>
                )
            }
        </div>
    );
};

export default PostDetail;