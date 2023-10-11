package pokemonsiteserver.demo.pokemon;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pokemonsiteserver.demo.pokemon.resources.PokemonToList;
import pokemonsiteserver.demo.pokemon.resources.Pokemons;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class PokemonService {


    public Pokemons getAllPokemons() throws IOException {

        RestTemplate rest = new RestTemplate();
        ResponseEntity<Pokemons> pokemon=rest.exchange(
                "https://pokeapi.co/api/v2/pokemon",
                HttpMethod.GET,
                HttpEntity.EMPTY,
                Pokemons.class
        );
        return pokemon.getBody();
    }

    public PokemonToList getPokemonByName(String pokemonName) throws IOException {

        RestTemplate rest = new RestTemplate();
        ResponseEntity<PokemonToList> pokemon=rest.exchange(
                "https://pokeapi.co/api/v2/pokemon/"+pokemonName.toLowerCase(),
                HttpMethod.GET,
                HttpEntity.EMPTY,
                PokemonToList.class
        );
        return pokemon.getBody();
    }

    public Pokemons getPokemonByType(String pokemonType) throws IOException {

        RestTemplate rest = new RestTemplate();
        ResponseEntity<Pokemons> pokemon=rest.exchange(
                "https://pokeapi.co/api/v2/type/"+pokemonType.toLowerCase(),
                HttpMethod.GET,
                HttpEntity.EMPTY,
                Pokemons.class
        );
        return pokemon.getBody();
    }




}