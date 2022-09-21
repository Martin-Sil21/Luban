import React from "react";
import './home.css'

const Home = function () {
  return (
    <div>
      <section class="home">
        <div class="text-container">
          <div class="text1">
            <h1>
              BOOST YOUR <span class="type"></span>
            </h1>
            <h1>
              IMPULSA TU <span class="type1"></span>
            </h1>
          </div>

          <div class="text2">
            <h3>
              Únete a Luban!, la plataforma que te ayudará a conectar con tu
              próximo empleo.
            </h3>
          </div>
        </div>

        <div class="img-container">
          <img class="img1" src="./style-home/assets/Cool Kids - Sitting.png" />
        </div>

        <div class="button-container">
          <a href="#" class="button-main">
            Explora Oportunidades
          </a>

          <div class="icon-container">
            <img class="icons" src="./style-home/assets/avatar1.png" />
            <img class="icons" src="./style-home/assets/avatar2.png" />
            <img class="icons" src="./style-home/assets/avatar3.png" />
          </div>

          <h3 class="icon-text"> ⭐⭐⭐⭐ (4,5 / 5 estrellas)</h3>
        </div>

        <div class="waves-container">
          <img src="./style-home/assets/svg.png" />
        </div>
      </section>
    </div>
  );
};

export default Home;
