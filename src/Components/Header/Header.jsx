import React from "react";
import  JoaoAvatar from '../../assets/logo.png'

function Header() {

    return (
        <header>

      <div>
        <img src={JoaoAvatar} alt="Foto do rosto"></img>
      </div>

      <section class="titulo">

        <h1>João Victor Teixeira Marinho</h1>
        <h1>Densenvolvedor de  <br /> software</h1>


      </section>
    </header>
    )
}

export default Header;

