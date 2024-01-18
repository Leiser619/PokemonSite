import React, {useState, useEffect } from 'react';
import { Bangers } from '@next/font/google';
import { useRouter } from 'next/navigation';

const bangers = Bangers({
  subsets:['latin'],
    weight: ['400'],
});


const SearchBar = ({data}) => {


  const [pokemon,setPokemon]=useState('');
  const router = useRouter();
  
  const findPokemon=(event)=>{
    event.preventDefault();
    router.push("/pokedex/"+pokemon);
  }
  
  return (
      <main>
        <div className={`${bangers.className} flex justify-start  w-[100%] h-[130px]  border-x-4 border-black text-[20px] z-1`}>
            <div className='flex justify-center align-middle w-[100%] h-[100%]  items-center'>
                  <form onSubmit={findPokemon} className='flex justify-center align-middle  items-center w-[100%] h-[100%]'>
                      <input type="text" value={pokemon} placeholder='Wyszukaj pokemona!!!' onChange={(e)=>setPokemon(e.target.value)} className='text-5xl pl-3 w-[40%] h-[60%] rounded-full' ></input>
                  </form>
                
            </div>
        </div>

    </main>
  )
}

export default SearchBar