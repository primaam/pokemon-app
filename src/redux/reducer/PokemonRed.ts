import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { PokemonTypes, PokemonListTypes, PokemonUrlDetailTypes, PokemonSort } from "@/types/pokemon/pokemon"

const initialState : PokemonListTypes={
    count: 0,
    next: null,
    previous: null,
    results: [],
    filteredResults: [],
    searchQuery: ""
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

           state.count = action.payload.count
           state.next = action.payload.next
           state.previous = action.payload.previous
           state.results = newRes
           
        },
        sortPokemon(state, action: PayloadAction<"asc" | "desc">){
            state.results = action.payload === "asc" ? (
                state.results.sort(( a,b )=>{return a.name.localeCompare(b.name)})
            ) : (
                state.results.sort(( a,b )=>{return b.name.localeCompare(a.name)})
            )
            
        },
        searchPokemon(state, action: PayloadAction<string>){
            let filtered = state.results.filter((item)=>{
                return item.name.toLowerCase().includes(action.payload.toLowerCase())
            })
            state.searchQuery = action.payload
            action.payload.length === 0 ? (
                state.filteredResults = []
            ):(
                state.filteredResults = filtered
            )
            
        }
    }
})

export const {getPokemonList, sortPokemon, searchPokemon} = pokemonSlice.actions
export default pokemonSlice.reducer