import React from "react";

function Breadcrumb() {
    const parentToChild = JSON.parse(localStorage.getItem('datachild'));
    return(
        <ol className="breadcrumb text-muted categorias">
            <span >
                    {
                        Array.isArray(parentToChild) ? parentToChild.map(info => (
                                info.id === "category" ? info.values.slice(0,4).map(bread =>(
                                    <li >
                                        {
                                            bread.name
                                        }
                                    </li>
                                )) : ''
                        )) : ''
                    }
            </span>
        </ol>
    )
}
export default Breadcrumb;