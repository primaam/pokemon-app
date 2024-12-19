import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/page.module.css";
import PokemonList from "@/features/home/pokemonList/PokemonList";
import axios from "axios";
import PokemonAction from "@/features/home/pokemonAction/PokemonAction";
import { Header } from "@/components";
import Input from "@/components/input/input";

async function getPokemonData() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");

    return res.data;
}

export default async function Home() {
    const initialData = await getPokemonData();
    
    return (
        <div className={styles.layout}>
            <Header />
            <PokemonAction />
            <PokemonList initialData={initialData} />
            <Input/>
        </div>
    );
}
