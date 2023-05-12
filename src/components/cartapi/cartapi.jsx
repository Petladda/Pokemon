import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import { Await } from "react-router-dom";

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
                name: result.data.name,
                image: result.data.sprites.front_default
            }
            setPokemon(prev => [...prev,object])
          
        })
    }
    console.log("setPokemon",pokemon)

    useEffect(()=>{
        pokemonfetch()
    },[])


    return(
        <div>
            heloo
        </div>
    )
}