import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { About } from "./components/routes/About"; //debemos intalar esto antes npm i react-router-dom bootswatch
import { Processes } from "./components/routes/Market";
import { ItemDetailContainer } from "./components/itemDetail/ItemDetailContainer";
import { Navbar } from "./components/navbar/Navbar";
import { Cart} from "./components/cart/Cart";
import { Alert } from "./components/alerts/Alert";
import { Courses } from "./components/courses/Course";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/themes/GlobalStyles";
import { useDarkMode } from "./components/themes/useDarkMode";
import { lightTheme, darkTheme } from "./components/themes/Theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import './App.css';

function App() {
  const [theme, setTheme, mountedComponent] = useDarkMode(); //implemento localstorage
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Router>
        <Alert/>
        <Navbar/>
        <button className="boton-nocturno" onClick={themeToggler}><FontAwesomeIcon icon={faMoon} /></button>
        <div className="container p-3"></div>
        <div>
          <Switch>
            <Route path="/items/:id" component={ItemDetailContainer}/>
            <Route path="/about" component={About}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/" component={Processes}/>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;


