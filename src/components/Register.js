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
    <main className=' bg-[#fff] max-w-7xl mx-auto flex mt-10 gap-5 items-center '>
    <section  >
      <img src={Imagem} alt="Desenho colorido de livros, tinta, mulher, caneta tinteiro" className='max-w-[100%]' />
    </section>
    <section className=' w-80 h-96 shadow-lg shadow-gray-500/50 rounded-md stroke-[#A8A5A5] '>
      <img src={logo} alt="Logomarca da página publishIn" className='mx-auto' />
      <form action="" onSubmit={cadastrarUsuario} className='ml-10 mt-10'>
        <div >
          <label htmlFor="email" className='mt-1.5 mb-2 text-sm font-medium text-gray-900'>E-mail</label>
          <br />
          <input 
          className="block w-60 h-8 mt-1.5 mb-2 text-sm text-[#385A64] font-thin border border-gray-300 rounded-md cursor-text bg-[#F3F3F3] dark:text-gray-400 focus:outline-none shadow-lg shadow-gray-500/50 pl-2 "
          type="email"
          name='email'
          placeholder='Digite seu e-mail'
          value={email || ""}
          onBlur={handleBlur}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </div>
        <div>
          <label htmlFor="password" className='text-sm font-medium text-gray-900'>Senha</label>
          
          <input 
          className="block w-60 h-8 mt-1.5 mb-2 text-sm text-[#385A64] font-thin border border-gray-300 rounded-md cursor-text bg-[#F3F3F3] dark:text-gray-400 focus:outline-none shadow-lg shadow-gray-500/50 pl-2 "
          type="password"
           name='password'
           placeholder='Digite sua senha'
           value={password || ""}
           onChange={(e) => setPassword(e.target.value)}
           required
          />
        </div>
        <div>
          <label htmlFor="confirm" className='mt-1.5 mb-2 text-sm font-medium text-gray-900'>Confirme senha</label>
          <input 
          className="block w-60 h-8 mt-1.5 mb-2 text-sm text-[#385A64] font-thin border border-gray-300 rounded-md cursor-text bg-[#F3F3F3] dark:text-gray-400 focus:outline-none shadow-lg shadow-gray-500/50 pl-2 "
          type="password"
           name='Confirm'
           placeholder='Confirme sua senha'
           value={confirm || ""}
           onChange={(e) => setConfirm(e.target.value)}
           required
          />
        </div>
        
        <input type="submit" value="Cadastre-se" className='mt-4 rounded-lg w-40 h-9 bg-[#385A64]  cursor-pointer border-slate-300 hover:border-slate-400 items-center text-white shadow-lg shadow-gray-500/50 ml-9'/>
      </form>
    </section>
    </main>
    </>
  )
}

export default Register;
