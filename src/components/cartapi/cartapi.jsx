import axios from "axios"
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Modal } from "../modal/modal";


export const Cartapi = () =>{

  

    const [pokemon, setPokemon] = useState([])
    const isFetch = useRef(false)
    const [isopenmodal,setIsOpenmodal] = useState(false)
    const [itemmodal,setItemmdal] = useState('')
  
    const pokemonfetch = async()=>{
       const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
        const response = await axios.get(url)
         pokemonData(response.data.results)
 
    }

    const pokemonData = async(response)=>{
      response.map(async(item)=>{
        const result = await axios.get(item.url);
        const object = {
            id: result.data.id,
            name: result.data.name,
            image: result.data.sprites.front_default,
            weight : result.data.weight,
            height : result.data.height
        }
        setPokemon(prev => [...prev,object])
        console.log('result',result)

      })
      pokemon.sort((a, b) => a.id - b.id);
    }

    
    const openmodal = (item) =>{
       setIsOpenmodal(true)
       setItemmdal(item)
     }
 
    const closemodal = () =>{
      setIsOpenmodal(false)
    }

   

    useEffect(()=>{
        
        if(!isFetch.current){
            isFetch.current = true
            pokemonfetch()
        }


        
    },[])



    return (
      <div className="grid grid-cols-1 gap-1 px-6 cursor-pointer mt-5 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4">
       
        {pokemon.map((item)=>{
          return(
                    
            <div className=" flex border-2 border-amber-200 shadow-md rounded-xl drop-shadow-xl justify-around mb-2 
             bg-slate-500 hover:bg-amber-500 hover:text-white hover:skew-x-3 " 
              key={item.id}>
              <div className=" w-32 my-8  text-center  md:text-sm lg:text-xl  ">
              <h5 >#{item.id}</h5>
              <h5 className="text-white mb-1">{item.name}</h5>
              <button className="text-xs ml-2 w-16 bg-amber-400 rounded-2xl hover:bg-slate-700 " 
                onClick={()=>{openmodal(item)}}>details..</button>
                              
              </div>
              <div className="h-full w-30 mb-4 mt-4 items-end  hover:scale-125  ">
              <img  src={item.image}></img>
              </div>
                                     
              </div>      
                        
              )
               })
               }

        {isopenmodal && <Modal closemodal={closemodal} itemmodal={itemmodal}/>}     
                

       </div>
    )
}