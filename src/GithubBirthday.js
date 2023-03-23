import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

export const GithubBirthday = () => {
    const [born, updateBorn] = useState([]);

    const fetchBorn = async() => {
        const data = await API.get('servproj3api', '/born');
        updateBorn(data.born);
    };

    useEffect(() => {
        fetchBorn()
    }, []);

    return (
        <>
            <h3>Happy birthday!!</h3>
            {born.map(x => (
                <h4>GitHub user {x.name} was forged on {x.day}</h4>
            ))}
        </>
    );
}