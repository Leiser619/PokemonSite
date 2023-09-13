package pokemonsiteserver.demo.pokemon.resources;

import lombok.Data;

import java.util.List;

@Data
public class Pokemons {
    private List<PokemonList> results;
}