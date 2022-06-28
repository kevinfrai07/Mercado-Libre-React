import React from "react";
import free from '../assets/ic_shipping.png'

const Items = ({info}) => {

    const numberFormat = (value, currency) =>        
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: `${currency}`
        }).format(value);

    return (
            <span >
                <div className="row g-0">
                    <div className="col-sm-2" >
                        <a href={`items/${info.id}`}>
                            <img className="productitems" src={info.thumbnail} alt={info.thumbnail} />

                        </a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text1items">{info.currency_id === undefined ? numberFormat(info.price, 'USD') : numberFormat(info.price, info.currency_id)} {info.shipping.free_shipping ?<img src={free}/>  : ''} </h5>
                            <p className="card-text text2items" >{info.title}</p>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card-body">
                            <h5 className="card-title text-muted text3items">{info.address.state_name}</h5>
                        </div>
                    </div>
                </div >
                <hr width="95%" className="mx-auto" />
            </span>
    )
}
export default Items;