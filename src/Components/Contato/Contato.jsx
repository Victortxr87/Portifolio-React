
import { useState } from "react";
import React from "react";






function Contato(){
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");
    

    function enviarParaWhatsApp(event){

        event.preventDefault();

    let texto = `Olá, meu nome é ${nome}. Meu número é ${telefone}. Minha mensagem é: ${mensagem}`;
  
   
    const textoCodificado = encodeURIComponent(texto);
  
   
    window.open(`https://wa.me/351931373069?text=${textoCodificado}`);
    }

 

    return (


    
        <main>

<form onSubmit={enviarParaWhatsApp}>
        <label htmlFor="nomeesobrenome"> Nome e sobrenome </label>
        <input
          type="text"
          id="nomeesobrenome"
          className="input-padrao"
          required
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <label htmlFor="E-mail">E-mail </label>
        <input
          type="email"
          id="E-mail"
          className="input-padrao"
          required
          placeholder="seuemail@dominio.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="Telefone">Telefone </label>
        <input
          type="tel"
          id="Telefone"
          className="input-padrao"
          required
          placeholder="(XX) XXXXX-XXXX"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />

        <label htmlFor="Mensagem">Mensagem </label>

        <textarea
          cols="53"
          rows="10"
          id="mensagem"
          className="input-padrao"
          required
          value={mensagem}
          onChange={(event) => setMensagem(event.target.value)}
        ></textarea>
        

         
             <input type="submit" value="Enviar formulário" className="enviar"></input>
             
         </form>
        
       
        
            </main>




    )
}

export default Contato;
