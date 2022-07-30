import React from "react";


const Sugestions = function () {
  return (
    <div className="sugerencias">
      <h1>Sugerencias</h1>

      <div class="oficios">
        <button class="botones">General</button>
        <button class="botones">Plomero</button>
        <button class="botones">Gasista</button>
        <button class="botones">Electricista</button>
        <button class="botones">Pintor</button>
        <button class="botones">Limpieza</button>
      </div>
      <div class="cards">
        <div class="card">
          <img src="./assets/pescar.png" alt="" />
          <h5 class="fecha">21-07 al 30/02</h5>
          <h3 class="oficio">Plomero</h3>
          <div class="descripcion">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            aperiam facilis excepturi amet hic totam magni voluptates quia,
            maiores, laudantium nesciunt suscipit quos maxime officiis facere
            similique voluptate, dicta dignissimos.
          </div>
          <div class="abajo">
            <h3 class="precio" style="margin: auto;">
              $123123123
            </h3>
            <button class="botones" style="margin: auto; border-radius: 15%;">
              Llamar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sugestions;
