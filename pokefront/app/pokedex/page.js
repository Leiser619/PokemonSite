import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-[300vh] flex-col items-center px-20 py-20 bg-white">
            <div class="flex justify-center items-end rounded-tl-full rounded-tr-full bg-red-600 h-[20vh] min-w-[60vw] border-4 border-black">
                <div class="flex justify-center items-center -mb-[5vh] bg-white w-[5vw] h-[10vh] min-w-[10vh] min-h-[10vh] rounded-full rounded-tr-full border-[7px]  border-black z-10">
                    <div class="bg-white w-[4vw] h-[8vh] min-w-[1px] min-h-[9px] rounded-full rounded-tr-full border-[2px]  border-black z-10">                    
                    </div>
                </div>
            </div>
            <div class="flex justify-center align-middle min-h-[50vh] min-w-[60vw] bg-[#fffd] text-[#1b3d18]">
            </div>
            <div class="flex justify-center items-en rounded-bl-full rounded-br-full bg-white h-[20vh] min-w-[60vw] border-4 border-black">

            </div>
    </main>
  )
}
