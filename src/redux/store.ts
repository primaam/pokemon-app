import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from './reducer/PokemonRed'
import pokemonDetailReducer from './reducer/PokemonDetailRed'


const store = configureStore({
    reducer:{
        pokemon: pokemonReducer,
        pokemonDetail: pokemonDetailReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
