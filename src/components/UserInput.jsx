import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/userName.slice';
import { useNavigate } from 'react-router-dom';


const userInput = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userName, setUserName] = useState("");

    const dispatchUserName = () => {
        dispatch(changeName(userName))
    navigate("/pokemons")
    }

    return (
        <div className='beginning-container'>
             <div className='banner'>
                <h2>Hello trainer !</h2>
                <img src="https://seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon--trainer-png.png"/>
            </div>

            <p>Give me your name to start</p>
            <input
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)} />
            <button onClick={dispatchUserName}>send</button>
        </div>
    );
};

export default userInput;