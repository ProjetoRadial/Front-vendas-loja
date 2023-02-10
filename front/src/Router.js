import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage.js';
import { LoginPage } from "./pages/Login/LoginPage.js"
import { HomePage } from './pages/Home/HomePage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
