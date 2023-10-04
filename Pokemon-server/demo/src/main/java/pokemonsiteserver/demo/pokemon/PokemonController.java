package pokemonsiteserver.demo.pokemon;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pokemonsiteserver.demo.pokemon.resources.PokemonConfig;
import pokemonsiteserver.demo.pokemon.resources.PokemonEntity;
import pokemonsiteserver.demo.pokemon.resources.Pokemons;

import java.io.IOException;

@RestController
@RequestMapping("/api/pokemon")
@RequiredArgsConstructor
public class PokemonController extends PokemonConfig {
    @GetMapping()
    public Pokemons getPokemons() throws IOException {
        return pokemonService.getAllPokemons();
    }

    @GetMapping("/name/{pokemonName}")
    public PokemonEntity getPokemonByName(@PathVariable String pokemonName) throws IOException {
        return pokemonService.getPokemonByName(pokemonName);
    }

    @GetMapping("/type/{pokemonType}")
    public Pokemons getPokemonByType(@PathVariable String pokemonType) throws IOException {
        return pokemonService.getPokemonByType(pokemonType);
    }



}