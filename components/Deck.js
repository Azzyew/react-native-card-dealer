import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import axios from 'axios';

const Deck = () => {

    const getDeckURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

    const [deck, setDeck] = useState('');

    useEffect(() => {
    (async () => {
        let deckReq = await axios.get(getDeckURL);
        setDeck(deckReq.data);
    })();
    }, []);

    const handleCard = (e) => {
        e.preventDefault();
        console.log('random card');
    };

    return (
        <div>
            <h1>Card Dealer</h1>
            <Button
                onPress={handleCard}
                title="Random Card"
                color="#EABA40"
                accessibilityLabel="Get a new random card"
            />
        </div>
    );
}

export default Deck;