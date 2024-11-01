interface Ability {
    name: string;
    url: string;
  }
  
  interface AbilityEntry {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
  }

  interface Forms {
    name: string;
    url: string;
  }

export interface PokemonDetailTypes{
    abilities: AbilityEntry[] | [];
    id: number;
    height: number;
    forms: Forms[] | [];
    base_experience: number;
    location_area_encounters: string
}