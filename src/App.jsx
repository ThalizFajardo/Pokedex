import './styles.css'
import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import UserInput from './components/UserInput'
import PokemonDetail from './components/PokemonDetail'
import Pokemons from './components/Pokemons'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<UserInput />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/pokemons' element={<Pokemons />} />
            <Route path='/pokemons/:id' element={<PokemonDetail />} />
          </Route>

        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
