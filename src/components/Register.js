import React from 'react';
import Imagem from '../components/imgInicial.svg';
import { useState } from 'react';
import blogFetch from '../axios/config';

import logo from './logo.svg';

const Register = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

  function handleBlur({target}) {
    const emailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
    const validation = emailFormat.test(target.value);
    console.log(validation);
  }

    const cadastrarUsuario = async(e) => {

    //confirmar password
      if(password !== confirm){
        alert("Erro na senha")
      } else {
        console.log("ok!")
          e.preventDefault();
      
          const user = {email, senha:password};
      
          console.log(user)
          await blogFetch.post("/user/", JSON.stringify(user))
        }
    } 

  return ( 
  <>
    <main>
    <section className='box-border bg-[#fff] max-w-7xl mx-auto flex mt-10' >
      <img src={Imagem} alt="Desenho colorido de livros, tinta, mulher, caneta tinteiro" className='max-w-[100%]' />
    </section>
    <section>
      <img src={logo} alt="Logomarca da página publishIn" />
      <form action="" onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="email">E-mail</label>
          <br />
          <input 
          type="email"
          name='email'
          placeholder='E-mail'
          value={email || ""}
          onBlur={handleBlur}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <br />
          <input type="password"
           name='password'
           placeholder='Senha'
           value={password || ""}
           onChange={(e) => setPassword(e.target.value)}
           required
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirme senha</label>
          <br />
          <input type="password"
           name='Confirm'
           placeholder='Confirme Senha'
           
           value={confirm || ""}
           onChange={(e) => setConfirm(e.target.value)}
           required
          />
        </div>
        <br />
        <input type="submit" value="Cadastre-se" />
      </form>
      
    </section>
    </main>
    </>
  )
}

export default Register;
