package pokemonsiteserver.demo.pokemon.resources;

import lombok.Data;

import java.util.List;

@Data
public class PokemonToList {
    private Integer id;
    private String name;
    private List<typeIndex> types;
    private List<Move> moves;
    private SpriteToList sprites;
}
