"use client"
import React, { createElement, useEffect, useState } from 'react';
// import Head from 'next/head';
        // <PokeballTop/>
        //<div id="listOfPokemons">
        //<PokemonRecord/>
        //<div>
        //<PokeballBottom/>
import MiniPokeball from '@/components/MiniPokeball';
import PokeballTop from '@/components/PokeballTop';
import PokeballBottom from '@/components/PokeballBottom';
import PokemonRecord from '@/components/PokemonRecord';

export default function Page({ params }) {

    const [data, setData]=useState([]) 
    useEffect(() => {
      getData()
    }, []);

  const getData = async () => {
      const response = await fetch(`http://localhost:8081/api/pokemon/name/${params.slug}`)
      const data = await response.json();
      console.log(data)
      setData(data)
    }


  const [showMiniPokeball, setShowMiniPokeball] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMiniPokeball(false);

      showPokeball();

    }, 5000);

    function showPokeball(){
      const pokeballTop=createElement(PokeballTop)

      const pokeballRecord=createElement(PokemonRecord)

      const pokeballBottom=createElement(PokeballBottom)

      document.appendChild(pokeballTop);
      document.appendChild(pokeballBottom);
    
    }

    return () => {
      clearTimeout(timeoutId);

    };
  }, []  );
  return (
    <main id='main' className='flex flex-column justify-center align-middle h-[300vh] pt-[10vh] bg-[#fff] max-w-[100vw]'>
      {showMiniPokeball && <MiniPokeball id='miniPokeball' />}
    </main>
  );
}
