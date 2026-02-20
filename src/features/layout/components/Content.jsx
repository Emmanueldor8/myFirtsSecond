import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faBroom,
  faPenToSquare,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

export const Content = () => {
  const productos = [
    {
      id: 1,
      nombre: "Jordan 1",
      precio: 100,
      stock: 5,
      imagen: "/img/jordan1.jpg",
    },
    {
      id: 2,
      nombre: "Jordan 2",
      precio: 200,
      stock: 0,
      imagen: "/img/jorda2.jpg",
    },
    {
      id: 3,
      nombre: "Jordan 3",
      precio: 300,
      stock: 12,
      imagen: "/img/jordan3.jpg",
    },
  ];

  return (
    <main className="container my-5">
      <div className="row">

        {/* ================= PRODUCTOS ================= */}
        <div className="col-md-8">
          <h4 className="mb-4">Productos</h4>

          {productos.map((producto) => (
            <div key={producto.id} className="card mb-3 shadow-sm">
              <div className="row g-0 align-items-center">

                {/* Imagen */}
                <div className="col-md-4">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="img-fluid rounded-start"
                    style={{
                      height: "150px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Información */}
                <div className="col-md-8">
                  <div className="card-body">

                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5 className="mb-1">{producto.nombre}</h5>
                        <p className="text-muted mb-1">
                          ${producto.precio}
                        </p>

                        {/* Estado de stock */}
                        {producto.stock > 0 ? (
                          <span className="badge bg-success">
                            En stock ({producto.stock})
                          </span>
                        ) : (
                          <span className="badge bg-danger">
                            Agotado
                          </span>
                        )}
                      </div>

                      {/* Acciones */}
                      <div className="d-flex gap-2">
                        <button className="btn btn-outline-warning btn-sm">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>

                        <button className="btn btn-outline-danger btn-sm">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>

                    {/* Botón agregar */}
                    <div className="mt-3">
                      <button
                        className="btn btn-primary w-100"
                        disabled={producto.stock === 0}
                      >
                        <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                        Agregar al carrito
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ================= FORMULARIO ================= */}
        <div className="col-md-4">
          <h4 className="mb-4">Nuevo producto</h4>

          <form className="card p-3 shadow-sm">
            <div className="mb-2">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-2">
              <label className="form-label">Precio</label>
              <input type="number" className="form-control" />
            </div>

            <div className="mb-2">
              <label className="form-label">Stock</label>
              <input type="number" className="form-control" />
            </div>

            <div className="mb-2">
              <label className="form-label">Categoría</label>
              <select className="form-select">
                <option>Zapatillas</option>
                <option>Ropa</option>
                <option>Accesorios</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea className="form-control" rows="3" />
            </div>

            <div className="d-flex gap-2">
              <button type="button" className="btn btn-success w-100">
                <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                Agregar
              </button>

              <button type="reset" className="btn btn-outline-secondary w-100">
                <FontAwesomeIcon icon={faBroom} className="me-2" />
                Limpiar
              </button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
};
