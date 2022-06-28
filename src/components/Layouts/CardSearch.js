import React, {useContext, useState} from "react";
import { DataContext } from "../Context/DataContext";
import Items from "../Items";
import Breadcrumb from "./Breadcrumb";


const CardSearch = () => {
    const { buscarInfo } = useContext(DataContext);
    const datachild = buscarInfo.available_filters;
    localStorage.setItem('datachild', JSON.stringify(datachild))
    const products = buscarInfo.results;

    return (
        Array.isArray(products) ?
            <div className='container categorias'>
                {Array.isArray(products) ?  <Breadcrumb/> : ''}
            
                <div className="card mb-3" >
                    {
                        Array.isArray(products) && products.slice(0, 4).map(info => (


                            <Items
                                info={info}
                                key={info.id}
                            />
                        ))
                    }
                </div>
            </div>
        : ''
    )
}

export default CardSearch;