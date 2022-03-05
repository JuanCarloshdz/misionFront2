import React from "react";
import "./Product.css";


function Product({ id, title, image, price, rating, miCarrito, setMiCarrito  }) {

  const addPastel = ()=>{
    const prueba= [...miCarrito, { title, image, price, rating, miCarrito, setMiCarrito } ]
    setMiCarrito(prueba);
    console.log(miCarrito)
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={(Math.random() + 1).toString(36).substring(7)} >🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={ ()=> addPastel() } >Add to Basket</button>
    </div>
  );
}

export default Product;
