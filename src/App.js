import logo from './logo-cafe.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons";

//para usar favicon coloque el comando npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faFacebook} />
      </div>
      </header>
    </div>
  );
}

export default App;
