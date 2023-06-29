package pokemonsiteserver.demo.pokemon;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/pokemon")
public class PokemonController {

    @GetMapping("/name/{pokemonName}")
    public void getPokemonByName(){

    }

}
