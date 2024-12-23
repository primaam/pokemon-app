export interface PokemonTypes{
    name: string;
    url: string;
}

export interface PokemonUrlDetailTypes{
    name: string;
    url: string;
    imageUrl:string;
}

export interface PokemonSort{
    sort: 'asc' | 'desc'
}

export interface PokemonListTypes{
    count:number | 0;
    next: string | null;
    previous: string | null;
    results: PokemonUrlDetailTypes[] | [];
    filteredResults: PokemonUrlDetailTypes[] |[];
    searchQuery: string;
}



