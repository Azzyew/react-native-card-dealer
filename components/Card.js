import React, { useState } from 'react';
import { Image } from '../styles/page';

const Card = (props) => {

    const cardImg = useState(state?.drawn?.image);
    const cardName = useState(state?.drawn?.name); 
    
    return (
        <Image src={cardImg} alt={cardName}/>
    );
}

export default Card;