import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Button } from 'react-native';
import axios from 'axios';

const Deck = () => {

    const baseURL = 'https://deckofcardsapi.com/api/deck';

    const [deck, setDeck] = useState('');
    const [drawn, setDrawn] = useState([]);

    useEffect(() => {
    (async () => {
        let deckReq = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`);
        setDeck(deckReq.data);
    })();
    }, []);

    const handleCard = async(e) => {
        e.preventDefault();
    
        let id = deck['deck_id'];

        try {
            let cardURL = `${baseURL}/${id}/draw/?count=1`
            let cardRes = await axios.get(cardURL);
            if(!cardRes.data.success) {
                throw new Error("No cards remaining");
            }

        let card = cardRes.data.cards[0];
        setDrawn([...drawn, {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
        }]);

        } catch (err) {
            alert(err);
        }     
    };

    const cards = useState(state?.drawn?.map(c => (
        <Card name={c.name} image={c.image}/>
    )));

    return (
        <div>
            <h1>Card Dealer</h1>
            <Button
                onPress={handleCard}
                title="Random Card"
                color="#EABA40"
                accessibilityLabel="Get a new random card"
            />
            {cards}
        </div>
    );
}

export default Deck;