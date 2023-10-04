"use client"
import React, { useEffect, useState } from 'react';
import MiniPokeball from '@/components/MiniPokeball';
import PokeballTop from '@/components/PokeballTop';
import PokeballBottom from '@/components/PokeballBottom';
import PokemonRecord from '@/components/PokemonRecord';

export default function Page({ params }) {

  //   const [data, setData]=useState([]) 
  //   useEffect(() => {
  //     getData()
  //   }, []);

  // const getData = async () => {
  //     const response = await fetch(`http://localhost:8081/api/pokemon/name/${params.slug}`)
  //     const data = await response.json();
  //     console.log(data)
  //     setData(data)
  //   }

  const [showTable, setShowTable]=useState(false)
  useEffect(()=>{
    const showTableTimeout = setTimeout(() => {
      setShowTable(true);
    }, 3801);
    
    return () => {
      clearTimeout(showTableTimeout);
    };
   },[]);

  const [showMiniPokeball, setShowMiniPokeball] = useState(true); 
  useEffect(() => {
    const showMiniPokeballTimeout = setTimeout(() => {
      setShowMiniPokeball(false);

    }, 3800);

    return () => {
      clearTimeout(showMiniPokeballTimeout);
    };
   },[]);
  
   const mainClass = () => {
    useEffect(() => {
    window.scrollTo({
      top: 900,
      left: 0,
      behavior: "smooth",
    });
    }, []);
  };
  mainClass()

  return (
   <main id='main' className='flex flex-column justify-center align-middle h-[300vh] pt-[10vh] bg-[#fff] max-w-[100vw]'>
    {showMiniPokeball && (
    <div className='flex flex-col justify-center align-middle pt-[10vh] bg-[#fff]'>
    <MiniPokeball id='miniPokeball' />
    </div>
    )}
      {showTable && (
        <div className='flex flex-col justify-center align-middle pt-[10vh] bg-[#fff]'>
          <PokeballTop id='pokeballTop' />
          <PokemonRecord id='pokeballRecord' />
          <PokeballBottom id='pokeballBottom' />
        </div>
      )}
  </main>
  );
}
