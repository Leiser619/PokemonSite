import React from 'react';
import { Bangers } from '@next/font/google';

const bangers = Bangers({
  subsets:['latin'],
    weight: ['400'],
});

const nameColorsMap=[
  {key:'grass',value:'#01610c'},
  {key:'ghost',value:'#51008f'},
  {key:'normal',value:'#918d6e'},
  {key:'bug',value:'#2ac93d'},
  {key:'dark',value:'#1f241e'},
  {key:'dragon',value:'#05c3f7'},
  {key:'electric',value:'#fff700'},
  {key:'fairy',value:'#fb00ff'},
  {key:'fighting',value:'#ff0062'},
  {key:'fire',value:'#ff4000'},
  {key:'flying',value:'#438291'},
  {key:'ground',value:'#917243'},
  {key:'ice',value:'#00fffb'},
  {key:'poison',value:'#d400ff'},
  {key:'psychic',value:'#ff73fa'},
  {key:'rock',value:'#edd3a8'},
  {key:'steel',value:'#405d70'},
  {key:'water',value:'#009aff'}
]

const PokemonRecord = ({data}) => {
  let nameColor='#ffffff'

  if (data.types && data.types[0] && data.types[0].type.name) {
    const matchingColor = nameColorsMap.find(item => item.key === data.types[0].type.name.toLowerCase());
    if (matchingColor) {
       nameColor = matchingColor.value;
    }
  }
  return (
    <main>
        <div className={`${bangers.className} flex justify-start  w-[100%] h-[300px]  border-x-4 border-black text-[20px] z-1`}>
              {/* ------STATS------ */}
            <div className="flex flex-col items-center justify-center text-4xl pb-10 w-[30%] h-[100%] text-black rounded-[20px] z-1">
                <div>{"Waga: "+data.weight}</div>
                <div>{" Wzrost: "+data.height}</div>
                  {data.stats && data.stats.map((stat, index) => (
                  <div key={index}>
                   {stat.stat.name+": "}
                   {stat.base_stat}
                  </div>
              ))}

            </div>
            {/* -------TYPES------- */}
            <div  className="flex w-[40%] h-[100%] text-black flex-col items-center">
                <div className={`flex text-[30px] text-[${nameColor}] uppercase justify-center align-middle text-6xl`}>
                  {data.name+" #"+data.id}
                </div>

                <div className="flex flex-row justify-center">
                  {data.types && data.types.map((type, index) => (
                  <div key={index}>
                    <img className=' w-[50px] h-[50px]' 
                    src={`/types/${type.type.name}.png`} 
                    alt={`Zdjęcie typu ${type.type.name}`}/>
                  </div>
              ))}
              </div>
              {/* -----ATTACKS----- */}
              <div className='flex-col  w-[165px] h-[60%] overflow-hidden'>
                <div className="h-[100%] overflow-y-scroll scrollbar-hide text-center">
                  {data.moves && data.moves.map((move, index) => (
                      <div key={index}>
                        {move.move.name}
                      </div>
                  ))}
                </div>
              </div>
            </div>
                    {/* ------SPRITES------ */}
            <div className="flex flex-col justify-center w-[30%] min-h-[100%] text-black ">
              <div className="flex justify-center w-[100%] h-[50%] text-black">
                <img className='w-[150px] h-[150px]' src={`${data.sprites.front_default}`} alt={`Zdjęcie typu ${data.sprites.front_default}`}></img>
              </div>
              <div className="flex justify-center w-[100%] h-[50%] text-black ">
                <img className='w-[150px] h-[150px]' src={`${data.sprites.front_shiny}`} alt={`Zdjęcie typu ${data.sprites.front_default}`}></img>
              </div> 
            </div>
        </div>

  </main>
  )
}

export default PokemonRecord