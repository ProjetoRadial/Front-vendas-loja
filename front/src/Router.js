import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LoginPage } from "./pages/Login/LoginPage.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
