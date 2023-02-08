import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js';
import {LoginPage} from "./pages/Login/LoginPage.js"

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <LoginPage/>
      
    </div>
  );
}

export default App;
