import React from "react";
import Card from 'react-bootstrap/Card';
import Timer from "../Timer/Timer";


function HomeCard(props) {
    return (            
    <div className="container px-5 col-lg-4">
    <a href={`/${props.link}`}>
    <Card className="bg-dark text-white">
        <Card.Img src={props.img} alt="Card image" height={350}/>
        <Card.ImgOverlay className="card-img-overlay bg-dark opacity-75">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.desc}
            </Card.Text>
        </Card.ImgOverlay>
        </Card>
    </a>
    </div>)
}

export default HomeCard