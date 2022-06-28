import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Nav from "./Layouts/Nav";
import Breadcrumb from "./Layouts/Breadcrumb";

const Item = () => {
    const [infoproducto, setInfoproducto] = useState([]);
    const [resut, setResult] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (infoproducto === "" || resut === '') return;
        const obtenerData = async () => {
            const resultado = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
            setInfoproducto(resultado.data);
        }

        const info = async () => {
            const resultInfo = await axios.get(` https://api.mercadolibre.com/items/${id}`);
            setResult(resultInfo.data);
        }
        info();
        obtenerData();

    }, []);
    const numberFormat = (value, currency) =>        
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: `${currency}`
        }).format(value);


    return (
        <Fragment>
            <Nav/>
            <div className="container categorias">
            <Breadcrumb/>
                <div className="card">
                    <div className="row">
                        <div className="col-8">
                            <span>
                                {Array.isArray(resut.pictures) && resut.pictures.slice(0, 1).map(inf => (
                                    <img src={inf.secure_url} className="card-img-top product" key={inf.id} alt="..." />
                                ))}

                            </span>
                            <div className="card-body description">
                                <h5 className="card-title text4">Descripción del Producto</h5>
                                <p className="card-text text5">{infoproducto.plain_text}</p>
                            </div>

                        </div>

                        <div className="col-4">
                            <h5 className="card-title text1">{resut.condition === 'used' ? 'Usado' : 'Nuevo'} - {resut.sold_quantity} Vendidos</h5>
                            <p className="card-text text2">{resut.title}</p>
                            <h5 className="card-title text3"> {resut.currency_id === undefined ? numberFormat(resut.price, 'USD') : numberFormat(resut.price, resut.currency_id)}</h5>
                            <div className="d-grid gap-2 div-btn">
                                <button className="btn btn-lg btn-shop text-white">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>


    )
}
export default Item;