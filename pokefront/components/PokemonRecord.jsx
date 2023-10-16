import React from 'react';

const PokemonRecord = ({data}) => {
  return (
    <main>
        <div className="flex justify-start  w-[100%] h-[300px]  border-x-4 border-black font-sans text-[20px]">
              {/* ------STATS------ */}
            <div className="flex flex-col items-center justify-center w-[30%] h-[100%] text-black bg-[#1b365175] rounded-[20px]">
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
            <div className="flex w-[40%] h-[100%] text-black flex-col items-center">
                <div className="flex text-[30px] uppercase justify-center align-middle">
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
              <div className='flex-col  w-[150px] h-[60%] overflow-hidden'>
                <div class="h-[100%] overflow-y-scroll">
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