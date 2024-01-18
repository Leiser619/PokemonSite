"use client"
import React, { useEffect, useState } from 'react';
import MiniPokeball from '@/components/MiniPokeball';
import PokeballTop from '@/components/PokeballTop';
import PokeballBottom from '@/components/PokeballBottom';
import PokemonRecord from '@/components/PokemonRecord';
import PokemonRecordEmpty from '@/components/PokemonRecordEmpty';
import BackgroundImage from '@/components/BackgroundImage';
import { useRouter } from 'next/router';


export default function Page({ params }) {
  const [data, setData] = useState([]);
  const [backgroundUrl,setBackgroundUrl]=useState('');
  
  useEffect(() => {
    getData();
    getBackgroundUrl();
  }, []);


  const getBackgroundUrl = () => {
    const backgroundNumber=Math.floor(Math.random() * (6- 1 + 1)) + 1;
    const backgroundUrl=`/background/${backgroundNumber}.png`;
    setBackgroundUrl(backgroundUrl);
  }

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/pokemon/name/${params.slug}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setData(data);

    } catch (error) {
      console.error('Błąd podczas pobierania danych z API:', error);
      return <h1>404 - Page Not Found</h1>
    }
  };

  const [showTable, setShowTable] = useState(false);
  useEffect(() => {
    const showTableTimeout = setTimeout(() => {
      setShowTable(true);
    }, 3801);

    return () => {
      clearTimeout(showTableTimeout);
    };
  }, []);

  const [showMiniPokeball, setShowMiniPokeball] = useState(true);
  useEffect(() => {
    const showMiniPokeballTimeout = setTimeout(() => {
      setShowMiniPokeball(false);
    }, 3800);

    return () => {
      clearTimeout(showMiniPokeballTimeout);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 900,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main id='main' className='flex flex-column justify-center align-middle h-[100vh]'>
      {showMiniPokeball && (
        <div className='flex flex-col justify-center align-middle pt-[10vh]'>
          <MiniPokeball id='miniPokeball' />
        </div>
      )}
      {showTable && (
        <div className='flex flex-col justify-center align-middle pt-[10vh]  w-[90%] h-[100%]'>
          <BackgroundImage backgroundImage={backgroundUrl}/>
          <PokeballTop id='pokeballTop' />
          <PokemonRecordEmpty/>
          <PokemonRecord id='pokeballRecord' data={data}/>
          <PokeballBottom id='pokeballBottom' />
        </div>
      )}
    </main>
  );
}