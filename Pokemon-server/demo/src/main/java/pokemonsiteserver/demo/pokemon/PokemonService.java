package pokemonsiteserver.demo.pokemon;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pokemonsiteserver.demo.pokemon.resources.PokemonEntity;
import pokemonsiteserver.demo.pokemon.resources.PokemonsFromType;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class PokemonService {
    public PokemonEntity getPokemonByName(String pokemonName) throws IOException {

        RestTemplate rest = new RestTemplate();
        ResponseEntity<PokemonEntity> pokemon=rest.exchange(
                "https://pokeapi.co/api/v2/pokemon/"+pokemonName.toLowerCase(),
                HttpMethod.GET,
                HttpEntity.EMPTY,
                PokemonEntity.class
        );
        return pokemon.getBody();
    }

    public PokemonsFromType getPokemonByType(String pokemonType) throws IOException {

        RestTemplate rest = new RestTemplate();
        ResponseEntity<PokemonsFromType> pokemon=rest.exchange(
                "https://pokeapi.co/api/v2/type/"+pokemonType.toLowerCase(),
                HttpMethod.GET,
                HttpEntity.EMPTY,
                PokemonsFromType.class
        );
        return pokemon.getBody();
    }




}