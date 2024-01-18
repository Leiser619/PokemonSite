"use client"
import React, { useEffect, useState } from 'react';
import PokeballTop from '@/components/PokeballTop';
import PokeballBottom from '@/components/PokeballBottom';
import PokemonRecordEmpty from '@/components/PokemonRecordEmpty';
import SearchBar from '@/components/SearchBar';


export default function Page() {
  return (
    <main id='main' className='flex flex-column justify-center align-middle h-[100vh]'>
                <div className='flex flex-col justify-center align-middle pt-[10vh]  w-[90%] h-[100%]'>
          <PokeballTop id='pokeballTop' />
          <PokemonRecordEmpty/>
          <SearchBar/>
          <PokemonRecordEmpty/>
          <PokeballBottom id='pokeballBottom' />
          </div>
    </main>
  );
}