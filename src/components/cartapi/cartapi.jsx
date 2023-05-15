import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";


export const Cartapi = () =>{

    const [pokemon, setPokemon] = useState([])
    
    const pokemonfetch = async()=>{
       const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
        const response = await axios.get(url)
         pokemonData(response.data.results)
 
    }

    const pokemonData = async(response)=>{
        response.map(async(item)=>{
            const result = await axios.get(item.url);
            const object = {
                id: result.data.order,
                name: result.data.name,
                image: result.data.sprites.front_default
            }
            setPokemon(prev => [...prev,object])
          
            console.log("setPokemon",result)
        })
    }

    useEffect(()=>{
        pokemonfetch()
    },[])


    return (
       <div className="grid grid-cols-4 gap-4 px-6 cursor-pointer mt-5">
            {pokemon.map((item)=>{
                return(
                    <div className="flex border-2 border-amber-200 shadow-md rounded-xl drop-shadow-xl justify-around mb-2 bg-slate-500 hover:bg-amber-500 hover:text-white  " key={item.id}>
                        <div className=" w-32 my-8  text-center  md:text-sm lg:text-xl  ">
                            <h5 >#{item.id}</h5>
                            <h5 className="text-white mb-1">{item.name}</h5>
                            <button className="text-xs ml-2 w-16 bg-amber-400 rounded-2xl hover:bg-slate-700 ">details..</button>
                        </div>
                        <div className="h-full w-30 mb-4 mt-4 items-end  hover:scale-125 md: ">
                        <img  src={item.image}></img>
                        </div>
                        
                    </div>
                )
                    
                
            })}
       </div>
    )
}