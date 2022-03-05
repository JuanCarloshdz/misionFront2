import React from "react";
import "./Home.css";
import Product from "./Product";

function Home({ miCarrito, addCarrito }) {

  

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://raw.githubusercontent.com/JuanCarloshdz/imagenes/main/Usign-Gradients-Featured-Image%20(1).jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Pastel de chocolate sabor chocolate, glaseado de chocolate y M&M's de decoracion"
            price={11.96}
            rating={5}
            image="https://raw.githubusercontent.com/JuanCarloshdz/imagenes/main/pastel1.jpg"
            miCarrito={miCarrito} 
            setMiCarrito={addCarrito}
          />
          <Product
            id="49538094"
            title="Pastel de vainilla, adorno estilo confeti de tres leches"
            price={239.0}
            rating={4}
            image="https://raw.githubusercontent.com/JuanCarloshdz/imagenes/main/partel2.jpg"
            miCarrito={miCarrito} 
            setMiCarrito={addCarrito}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="PAstel sabor vainilla, betun sabor uva"
            price={199.99}
            rating={3}
            image="https://raw.githubusercontent.com/JuanCarloshdz/imagenes/main/pastel3.jpg"
            miCarrito={miCarrito} 
            setMiCarrito={addCarrito}
          />
          <Product
            id="23445930"
            title="Pastel sanvalentin, sabor chocolate y fresa sabor tres leches"
            price={98.99}
            rating={5}
            image="https://raw.githubusercontent.com/JuanCarloshdz/imagenes/main/pastel4.jpg"
            miCarrito={miCarrito} 
            setMiCarrito={addCarrito}
          />
          <Product
            id="3254354345"
            title="PAstel vainilla, tres leches, con frutas doble capa"
            price={598.99}
            rating={4}
            image="https://raw.githubusercontent.com/JuanCarloshdz/imagenes/main/pastel5.jpg"
            miCarrito={miCarrito} 
            setMiCarrito={addCarrito}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Pastel sabor sorpresa, con frutas picadas y lechesilla con una capa intermedia"
            price={1094.98}
            rating={4}
            image="https://raw.githubusercontent.com/JuanCarloshdz/imagenes/main/pastel6.jpg"
            miCarrito={miCarrito} 
            setMiCarrito={addCarrito}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
