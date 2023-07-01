package pokemonsiteserver.demo.pokemon.resources;

import lombok.Data;

import java.util.List;


@Data
public class PokemonEntity {
    private Integer id;
    private String name;
    private List<typeIndex> types;
    private Integer height;
    private Integer weight;
    private List<moveIndex> moves;
    private List<statIndex> stats;
    private Sprite sprites;
}