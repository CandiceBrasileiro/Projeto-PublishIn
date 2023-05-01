import React from 'react';
import { useState } from 'react';
import blogFetch from '../axios/config';

import logo from './logo.svg';

const Register = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

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
  )
}

export default Register;
