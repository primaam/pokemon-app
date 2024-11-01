import React from "react";
import Image from "next/image";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
    name: string;
    url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
    return (
        <div>
            <Image alt="" src={url} width={300} height={300} />
            <h5>{name}</h5>
        </div>
    );
};

export default PokemonCard;
