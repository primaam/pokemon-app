import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { PokemonTypes, PokemonListTypes, PokemonUrlDetailTypes } from "@/types/pokemon"

const initialState : PokemonListTypes={
    count: 0,
    next: null,
    previous: null,
    results: []
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers:{
        getPokemonList(state, action: PayloadAction<PokemonListTypes>){
            let newRes: PokemonUrlDetailTypes[] = []
            const list = action.payload.results

            list.map((item, i)=>{
                newRes.push({
                    name: item.name,
                    url: item.url,
                    imageUrl:  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.url.split("/")[6].padStart(3, "0")}.png` 
                })
            })
           
            state = {
                ...action.payload,
                results: newRes
            }
        }
    }
})

export const {getPokemonList} = pokemonSlice.actions
export default pokemonSlice.reducer