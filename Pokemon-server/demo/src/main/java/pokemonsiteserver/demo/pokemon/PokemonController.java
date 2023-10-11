package pokemonsiteserver.demo.pokemon;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pokemonsiteserver.demo.pokemon.resources.PokemonConfig;
import pokemonsiteserver.demo.pokemon.resources.PokemonToList;
import pokemonsiteserver.demo.pokemon.resources.Pokemons;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/pokemon")
@RequiredArgsConstructor
public class PokemonController extends PokemonConfig {
    @GetMapping()
    public Pokemons getPokemons() throws IOException {
        return pokemonService.getAllPokemons();
    }

    @GetMapping("/name/{pokemonName}")
    public PokemonToList getPokemonByName(@PathVariable String pokemonName) throws IOException {
        return pokemonService.getPokemonByName(pokemonName);
    }

    @GetMapping("/type/{pokemonType}")
    public Pokemons getPokemonByType(@PathVariable String pokemonType) throws IOException {
        return pokemonService.getPokemonByType(pokemonType);
    }



}