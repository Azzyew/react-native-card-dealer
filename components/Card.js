import React, { useState, useEffect } from 'react';
import { CardImage } from '../styles/page';

const Card = (props) => {

    const cardImg = useState(props.image);
    const cardName = useState(props.name);

    const [transform, setTransform] = useState('');

    useEffect(() => {
        let angle = Math.random() * 90 - 45;
        let x = Math.random() * 40 - 20;
        let y = Math.random() * 40 - 20;
        let tform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
        setTransform(tform);
    }, []);

    return (
        <CardImage source={{uri: cardImg[0]}} alt={cardName} style={{ transform: transform}} />
    );
}

export default Card;
