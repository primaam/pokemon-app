"use client";

import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { getPokemonList, searchPokemon, sortPokemon } from "@/redux/reducer/PokemonRed";
import debounce from "lodash/debounce";
import styles from "./PokemonAction.module.css";
import { Button } from "@/components";

const PokemonAction = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { filteredResults, searchQuery } = useSelector((state: RootState) => state.pokemon);

    const handleSortPokemon = (val: "asc" | "desc") => {
        dispatch(sortPokemon(val));
    };

    const debouncedSearch = useCallback(
        debounce((searchTerm: string) => {
            dispatch(searchPokemon(searchTerm));
        }, 300),
        [dispatch]
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value);
    };

    return (
        <>
            <div className={styles.container}>
                <input onChange={handleSearch} placeholder="Search your pokemon..." />
                <div className={styles.sortContainer}>
                    <h3>Sort by Name</h3>
                    <Button title="Asc" onClick={() => handleSortPokemon("asc")} />
                    <Button title="Desc" onClick={() => handleSortPokemon("desc")} />
                </div>
            </div>
            {filteredResults.length === 0 && searchQuery.length > 0 && (
                <div className={styles.notFound}>
                    <p>Sorry, No Pokemon found matching your search.</p>
                </div>
            )}
        </>
    );
};

export default PokemonAction;
