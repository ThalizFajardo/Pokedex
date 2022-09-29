import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const PokemonCard = ({ url }) => {

    const [characters, setCharacters] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(url)
            .then(res => setCharacters(res.data))
    }, [])

    console.log(characters)

    return (
        <div className='containerCard'>
            <div onClick={() => navigate(`/pokemons/${characters.id}`)} className='card'>
                <div >
                    <h3>{characters.name}</h3>
                    <p className='cloud'><b>Types: </b><span>{characters?.types?.[0].type?.name}</span></p>
                </div>
                <div> <img src={characters.sprites?.front_default} /></div>
            </div>
        </div>
    );
};

export default PokemonCard;