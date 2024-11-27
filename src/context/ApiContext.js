import { createContext, useEffect } from "react";
import React, { useState} from 'react';
import { myAxious } from "./MyAxious";
import Termek from "../components/Termek.js";
import axios from "axios"





export const ApiContext = createContext("")

export const WebProvider = ({children})=>{

    const [termekLista, setTermekLista] = useState([])

    function getAdat(vegpont){

        myAxious
        .get(vegpont)
        .then(function(response) {

            console.log(response.data)

            setTermekLista(response.data)

        
        })

        .catch(function (error) {

            console.log(error)
        })

        .finally(function (){



        })

       

    } 
    useEffect(() => {


            getAdat('/api/books')
        },[])//lestoppolja

    return ( <ApiContext.Provider value= {{termekLista}}>
        {children}
</ApiContext.Provider>

)


}