package pokemonsiteserver.demo.pokemon.resources;

import lombok.Data;

import java.util.List;
@Data
public class PokemonsFromType {
    private List<Pokemon> pokemon;
}