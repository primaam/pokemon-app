"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { getPokemonList, sortPokemon } from "@/redux/reducer/PokemonRed";
import PokemonCard from "../../../components/pokemonCard/PokemonCard";
import styles from "./PokemonList.module.css";

interface Props {
    initialData: any;
}

const PokemonList: React.FC<Props> = ({ initialData }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { results, filteredResults } = useSelector((state: RootState) => state.pokemon);

    useEffect(() => {
        dispatch(getPokemonList(initialData));
    }, [dispatch, initialData]);

    return (
        <div className={styles.gridContainer}>
            {filteredResults.length > 0
                ? filteredResults.map((item, i) => {
                      return <PokemonCard key={i} name={item.name} imageUrl={item.imageUrl} />;
                  })
                : results.map((item, i) => {
                      return <PokemonCard key={i} name={item.name} imageUrl={item.imageUrl} />;
                  })}
        </div>
    );
};

export default PokemonList;
