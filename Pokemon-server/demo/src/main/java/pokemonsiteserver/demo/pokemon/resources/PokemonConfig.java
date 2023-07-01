package pokemonsiteserver.demo.pokemon.resources;


import org.springframework.beans.factory.annotation.Autowired;
import pokemonsiteserver.demo.pokemon.PokemonService;
;

public abstract class PokemonConfig{
    @Autowired
    protected PokemonService pokemonService;

}