import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

export const Coins = () => {
    const [coins, updateCoins] = useState([]);

    const fetchCoins = async() => {
        const data = await API.get('servproj3api', '/coins');
        updateCoins(data.coins);
    }

    useEffect(() => {
        fetchCoins()
    }, []);

    return (
        <>
            {coins.map((x, i) => (
                <div key={i}>
                    <h3>{x.name} - "{x.symbol}"</h3>
                    <h4>${x.price_usd}</h4>
                </div>
            ))}
        </>
    )
}