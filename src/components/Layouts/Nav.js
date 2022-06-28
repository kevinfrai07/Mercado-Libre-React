import React, { useContext, useState } from "react";
import Logo from '../../assets/Logo_ML.png'
import ic_Search from '../../assets/ic_Search.png';
import { DataContext } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";







const Nav = () => {

    //llamando el context para evitar manejo de props 
    const {ObtenerDatos } = useContext(DataContext);

    //search params parece useState
    const navigate = useNavigate();

    const [buscar, setBuscar] = useState({
        searchs: localStorage.getItem('search') === null ? '' : localStorage.getItem('search'),
    });


    const dataSearch = e => {
        setBuscar({
            [e.target.name]: e.target.value
        })

    }
    const { searchs } = buscar


    const ConsumoApi = () => {
        localStorage.setItem('search', searchs);
        ObtenerDatos(searchs);
        navigate({pathname: '/search', search: `${searchs}`});
    
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            ConsumoApi()
        }
      }
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="col-1"></div>
                    <div className="col-1">
                        <a href={"/"}>
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="col-9">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nunca dejes de buscar"
                                name="searchs"
                                onKeyPress={handleKeyPress}
                                value={searchs}
                                onChange={dataSearch}
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <span onClick={ConsumoApi} className="input-group-text search" ><img src={ic_Search} alt="" /></span>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </nav>
        </div>

    )
}
export default Nav;