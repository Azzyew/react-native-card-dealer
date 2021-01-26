import React, { useState } from 'react';
import { Image, Text } from 'react-native';

const Card = (props) => {

    const cardImg = useState(props.image);
    const cardName = useState(props.name); 

    return (
        <>
        <Image source={{uri: cardImg[0]}} alt={cardName} style={{height: 200, width: 150}}/>
        </>
    );
}

export default Card;
