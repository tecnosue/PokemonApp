import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';


export const getPokemonInfo = async( nameOrId: string ) => {

  //con esta funcion especificamos la info que queremos traer de cada pokemon.
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

}