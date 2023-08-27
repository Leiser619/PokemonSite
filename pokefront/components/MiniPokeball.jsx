import React from 'react'

const MiniPokeball = () => {
  return (
    <main>
      <div className="pokeballSpin">
          <div class="flex justify-center items-end rounded-tl-full rounded-tr-full bg-red-600 h-[150px] w-[300px] border-4 border-black">
                {/* zamkniecie pokeballa */}
                <div class="flex justify-center items-center -mb-[33px] bg-white min-w-[7vh] min-h-[7vh] rounded-full rounded-tr-full border-[7px]  border-black z-10">
                    {/* mikro kółko w srodku */}
                    <div class="bg-white  min-w-[45px] min-h-[45px] rounded-full rounded-tr-full border-[1px]  border-black z-10">                    
                    </div>
                </div>
            </div>
    
        <div class="flex justify-center rounded-bl-full rounded-br-full bg-white h-[150px] w-[300px] border-4 border-black">
        </div>
        </div>

  </main>
  )
}

export default MiniPokeball