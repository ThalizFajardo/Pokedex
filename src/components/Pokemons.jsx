import React from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PokemonDetail from './PokemonDetail';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';


const Pokemons = () => {

    const navigate = useNavigate()
    const name = useSelector(state => state.userName)

    const [pokemonsList, setPokemonsList] = useState([])
    const [nameInput, setNameInput] = useState("")
    const [type, setType] = useState([])

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(res => setPokemonsList(res.data.results))
        axios
            .get('https://pokeapi.co/api/v2/type')
            .then(res => setType(res.data.results))
    }, [])



    const searchName = () => {
        navigate(`/pokemons/${nameInput}`)
    }

    const filterType = url => {
        axios
            .get(url)
            .then(res => setPokemonsList(res.data.pokemon))
    }


    //////OUTPUT...
    return (
        <div className='PokedexContainer' >
            <h2>Pokedex</h2>

            <p>Welcome {name}, here you can find your favorite pokemon!</p><br />

            <div className='searchName'>
                <input
                    type="text"
                    placeholder="buscar por nombre"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)} />
                <button onClick={searchName}>search</button>
            </div>

            < select onChange={e => filterType(e.target.value)} >
                <option>select type of pokemon</option>
                {
                    type.map(type => (
                        <option key={type.url} value={type.url}>
                            {type.name}
                        </option>
                    ))
                }

            </select >


            <ul className='pokecontainer'>
                {
                    pokemonsList.map(pokemon => (
                        <li>
                            <PokemonCard
                                url={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
                                key={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokemons;