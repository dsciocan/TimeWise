import React from "react";
import Card from 'react-bootstrap/Card';
import "./card.css"
import { Link } from "react-router-dom";

function HomeCard(props) {
    return (            
    <div className="container px-5 col-lg-4">
    <Link to={`/${props.link}`}>
    <Card className="bg-dark card">
        <Card.Img  className="feature-img" src={props.img} alt="Card image" height={350}/>
        <Card.ImgOverlay className="card-img-overlay bg-dark opacity-75">
            <Card.Title id="card-text">{props.title}</Card.Title>
            <Card.Text id="card-text">
            {props.desc}
            </Card.Text>
        </Card.ImgOverlay>
        </Card>
        </Link>
    </div>)
}

export default HomeCard