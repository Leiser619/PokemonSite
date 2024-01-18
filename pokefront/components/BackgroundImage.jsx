import React from 'react';
// strona bedzie losowala kilka randomowych zdjec i bedzie je ustawiac po kolei w wybranym miejscu bedzie sie zmieniala raz dziennie
const BackgroundImage = ({backgroundImage}) => {
  console.log("sisisi"+backgroundImage)
  return (
    <main>
        <div className="flex flex-col justify-center w-[30%] min-h-[100%] text-black absolute">
              <div className="flex justify-center w-[100%] h-[50%] text-black">
                <img className=' z-[-1] w-[200px] h-[200px]' src={backgroundImage} alt={`Numer pokemona ustawionego jako tlo ${backgroundImage}`}></img>
              </div>
            </div>
  </main>
  )
}
export default BackgroundImage