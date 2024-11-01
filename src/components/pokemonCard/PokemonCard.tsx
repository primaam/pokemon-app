import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
    name: string;
    imageUrl: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl }) => {
    return (
        <Link
            className={styles.card}
            href={{
                pathname: "/detail",
                query: {
                    name: name,
                },
            }}
        >
            <Image alt={name} src={imageUrl} className={styles.image} width={300} height={300} />
            <h5>{name}</h5>
        </Link>
    );
};

export default PokemonCard;
