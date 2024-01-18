import React from 'react'
import { useRouter } from 'next/navigation';
const PokeballTop = () => {
  const router = useRouter();
  
  const ToMainPage=()=>{
    router.push("/");
  }
  return (
    <main>
            <div className="flex justify-center items-end rounded-tl-full rounded-tr-full bg-red-600 h-[20vh] min-w-[60vw] border-4 border-black z-1">
                <div className="flex justify-center items-center -mb-[5vh] bg-white w-[5vw] h-[10vh] min-w-[10vh] min-h-[10vh] rounded-full rounded-tr-full border-[7px]  border-black z-10">
                    <div className="bg-white w-[4vw] h-[8vh] min-w-[1px] min-h-[9px] rounded-full rounded-tr-full border-[2px]  border-black z-10">                    
                      <button onClick={ToMainPage} className='w-[100%] h-[100%] rounded-full'></button>
                    </div>
                </div>
            </div>

  </main>
  )
}

export default PokeballTop