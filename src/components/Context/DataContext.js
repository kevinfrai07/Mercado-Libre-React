import React, { createContext, useState } from "react";
import axios from "axios";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    //consumos api buscador 
    const [buscarInfo, setBuscarInfo] = useState([]);
    const httpOptions = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': "true",

    }

    const ObtenerDatos = async (data) => {


        try {
            const resultado = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${data}`, {
                headers: httpOptions

            });

            setBuscarInfo(resultado.data);
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <DataContext.Provider
            value={{
                buscarInfo,
                ObtenerDatos
            }}
        >
            {children}
        </DataContext.Provider>
    )
}