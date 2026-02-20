import React from "react";
import { NavLink } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex align-items-center gap-4">

        {/* Logo + título */}
        <div className="d-flex align-items-center gap-2">
          <img
            src="/img/logo.jpg"
            alt="Logo"
            width="40"
            height="40"
            className="rounded-circle"
          />
          <h3 className="m-0">Mi Tienda</h3>
        </div>

        {/* Navegación */}
        <nav className="d-flex gap-3">
          <span className="text-white fw-semibold cursor-pointer">
            <NavLink className="nav-link" to="/ ">Incio</NavLink>
          </span>
          <span className="text-white fw-semibold cursor-pointer">
            <NavLink className="nav-link" to="/productos">Productos</NavLink>
          </span>
          <span className="text-white fw-semibold cursor-pointer">
            <NavLink className="nav-link" to="/props">Props</NavLink>
          </span>
        </nav>

        {/* Barra de búsqueda */}
        <form className="d-flex flex-grow-1 mx-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar productos..."
          />
          <button className="btn btn-outline-light" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>

        {/* Botón carrito */}
        <button className="btn btn-outline-light">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>

      </div>
    </header>
  );
};

export default Header;
