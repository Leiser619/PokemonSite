import React from 'react';

const PokemonRecord = ({data}) => {
  return (
    <main>
         <div className="flex justify-center w-[100%] items-center bg-[#edf7ac61] h-[80x] border-x-4 border-black">
            <div className="flex justify-center w-[30%] h-[100%] text-black">
            {data.name}
            </div>
            <div className="flex justify-center w-[40%] h-[100%] text-black">
                {data.types &&
                  data.types.map((type, index) => (
                 <div key={index}>
                < img className=' w-[50px] h-[50px]'
                  src={`/types/${type.type.name}.png`}
                  alt={`Zdjęcie typu ${type.type.name}`}
                />
                </div>
              ))}
            
            </div>
            <div className="flex justify-center w-[30%] min-h-[100%] text-black">
            <img className='w-[50%] h-[50%]' src={`${data.sprites.front_default}`}></img>
            </div>
          </div>

  </main>
  )
}

export default PokemonRecord