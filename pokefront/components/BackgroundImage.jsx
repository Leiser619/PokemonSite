import React from 'react';

const backgroundImage = ({data}) => {
  return (
    <main>
        <div className="flex flex-col justify-center w-[30%] min-h-[100%] text-black ">
              <div className="flex justify-center w-[100%] h-[50%] text-black">
                <img className='w-[150px] h-[150px]' src={`${backgorundUrl}`} alt={`Numer pokemona ustawionego jako tlo ${data.sprites.front_default}`}></img>
              </div>
            </div>
  </main>
  )
}
export default backgroundImage