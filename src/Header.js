import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";

function Header() {


  return (
    <div className="header">
        <img
          className="header__logo"
          src="https://raw.githubusercontent.com/JuanCarloshdz/imagenes/main/pngwing.com.png"
          alt=''
        />
     
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
      <Link  to={'/'} >
          <div  className="header__option">
           
            <span className="header__optionLineOne">Pasteles</span>
            <span className="header__optionLineTwo">Listado</span>
           
          </div>
          </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Mi pedido</span>
          <span className="header__optionLineTwo">& Ordenes</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Pagar</span>
          <span className="header__optionLineTwo">Pedido</span>
        </div>

          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
             
            </span>
          </div>
      </div>
    </div>
  );
}

export default Header;
