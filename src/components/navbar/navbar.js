import { Link } from "react-router-dom"
import { Carts } from "../cart/cartWidget"
import logo from '../../../../baristapp/src/assets/baristappLogo.png';
import styled from "styled-components";
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { CartContext } from "../cart/CartContext"

const buttonLogin  = styled.button`
    @media (min-width: 992px){
        margin-left: 8rem;
        
    }
    @media (max-width: 1400px){
        width: 10.8rem;
        padding-bottom: 2rem;
        display: flex;
        height: 2rem;
    }
    
`
export const Navbar = () => {
  const { userName, autenticacion } = useContext(CartContext)
	const handleLogIn = () => {
		autenticacion();
	};
  return(  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand mx-3" to="/">
              <img src={logo} alt="baristapp-logo" width="30" height="24" class="d-inline-block align-text-top"/>
                BaristApp
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/categoria">Category</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to={{ pathname:"https://github.com/Rodrigo-Novas"}} target="_blank" >Follow me in Github</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/cart"><Carts/></Link>
                </li>
                {userName ? (
                  <p className="ms-auto mt-3">Hola! {userName}</p>
                ) : (
                  <div className="text-left">
                    <buttonLogin className="btn btn-dark" onClick={handleLogIn}>
                      <FontAwesomeIcon icon={faGoogle} />
                      <span class='badge badge-warning' > Inicia sesión </span>
                    </buttonLogin>
                  </div>
                )}
            </ul>
          </div>
        </nav>)};