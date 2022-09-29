import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const { id } = useParams()
    const [characterDetail, setCharacterDetail] = useState({})

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setCharacterDetail(res.data))
    }, []);


////OUTPUT..
    return (
        <div className='characterDetail-container'>
            <h1>PokemonDetail</h1>
            
            <div>
                <h1>{characterDetail.name}</h1>
                <img src={characterDetail?.sprites?.other.dream_world.front_default} />
            </div>
        </div>

    );
};

export default PokemonDetail;