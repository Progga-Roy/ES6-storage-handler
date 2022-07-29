import React from 'react';
import { addToDb, removeFromDb } from '../../utilites/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price,id} = props.cosmetic
    const addToCart =(id)=>{
      addToDb(id)
    }
    const removeFromCart = id =>{
    removeFromDb(id)
    }
   
    return (
        <div className='product'>
            <h2>{name}</h2>
            <h4>Price :{price}</h4>
            <p>It had id :{id}</p>
            <button onClick={()=> addToCart(id)}>Add to Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;