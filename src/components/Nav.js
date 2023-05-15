import React from 'react';
import logo from './logo.svg';
import '../index.css';
import { useNavigate } from 'react-router-dom';
// import Register from './Register';

const Nav = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/register');
  }

  return (
    <div className="box-border bg-[#fff] max-w-7xl mx-auto ">
      <nav className="flex justify-between #94a3b8 items-center shadow-md">
        <img src={logo} alt="Logomarca da página publishIn" className="ml-3" />
        <input
          className="rounded-lg  w-40 h-9 bg-[#ff735c] cursor-pointer border-slate-300 hover:border-slate-400 text-white shadow-md mr-3"
          name="btn"
          type="submit"
          value="Registre-se"
          onClick={handleClick}
        />
      </nav>
    </div>
  );
};

export default Nav;
