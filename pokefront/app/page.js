import Image from 'next/image'

export default async function Home({PokemonName}) {

  return (
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
    <main className="flex min-h-[300vh] flex-col items-center px-20 py-20 bg-white">
                  {/* {data && data.name} */}
                  {/* {data && Object.keys(data.types).map((item, i) => (
                <div key={i} className="report">
                       {data.types[item].map((media,ind) =>
                         <div key={ind}>{media.name}</div>
                      )} */}
                {/* </div>
        ))} */}
    </main>
  )
}
