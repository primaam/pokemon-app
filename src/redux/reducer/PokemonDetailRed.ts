import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {PokemonDetailTypes} from "@/types/pokemon/pokemonDetail"

const initialState : PokemonDetailTypes={
    abilities: [],
    base_experience: 0,
    forms: [],
    height: 0,
    id: 0,
    location_area_encounters: ""
}

const pokemonDetailSlice = createSlice({
    name: "pokemoDetail",
    initialState,
    reducers:{
        getPokemonDetail(state, action: PayloadAction<PokemonDetailTypes>){
            state= action.payload
        }
    }
})

export const {getPokemonDetail} = pokemonDetailSlice.actions
export default pokemonDetailSlice.reducer