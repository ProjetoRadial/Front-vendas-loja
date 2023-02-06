import './App.css';
import {LoginPage} from "./pages/Login/LoginPage.js"

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <div style ={{"background-color": "#fff"}}className="col-lg-4 col-md-6 col-sm-6 col-xs-12"></div>
    </div>
  );
}

export default App;
