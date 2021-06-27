import React from "react"
import { Link } from "react-router-dom"
import { Carts } from "./cart"
import logo from '../baristappLogo.png';
export const Navbar = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="baristapp-logo" width="30" height="24" class="d-inline-block align-text-top"/>
                BaristApp
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={{ pathname:"https://github.com/Rodrigo-Novas"}} target="_blank" >Follow me in Github</Link>
                </li>
                <li>
                  <Link className="nav-link" to="#"><Carts/></Link>
                </li>
            </ul>
          </div>
        </nav>);