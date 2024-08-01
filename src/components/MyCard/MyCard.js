import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CardMedia } from '@mui/material';
import './MyCard.css';
import { useState } from 'react';

export default function BasicCard(props) {
    const eachPost = props.eachPost;
    const { title, body, id, userId } = eachPost;
    const cardStyle = {
        margin: '10px',
        border: '1px solid red',
        borderRadius: '10px',
        filter: 'drop-shadow(5px 5px 5px lightgray)',
        textOverflow: 'ellipsis'

    };
    const [likeBtnColor, setLikeBtnColor]=useState('');
    const handleclick = () => {
        if(likeBtnColor){
            setLikeBtnColor('');

        }else{
            setLikeBtnColor('primary');
        }
    }
    return (
        <Card sx={{ maxWidth: 240 }} style={cardStyle} >
            <CardMedia
                sx={{ height: 20 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
                <CardActions>
                    <Link to={'/postdetail/' + id}>
                        <Button size="small">See More</Button>
                    </Link>
                </CardActions>
                <div className="postReach">
                    <div className="likeBtn">

                    </div>
                    <div className="commentBtn">

                    </div>
                </div>
            </CardContent>
        </Card>


    );
}