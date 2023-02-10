import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage.js';
import { LoginPage } from "./pages/Login/LoginPage.js"
import { CadastroFuncionarioPage } from "./pages/Cadastro/CadastroFuncionario/CadastroFuncionarioPage.js"



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<LoginPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />          
          <Route path='/cadastro/funcionario' element={<CadastroFuncionarioPage/>} />
{/*       <Route path='/cadastro' element={<CadastroPage/>} />
          <Route path='/cadastro/empresa' element={<CadastroEmpresaPage/>} />
          <Route path='/cadastro/usuario' element={<CadastroUsuarioPage/>} />
          <Route path='/cadastro/produto' element={<CadastroProdutoPage/>} /> */}
{/*       <Route path='/cadastro/loja' element={<CadastroLojaPage />} /> */}

        </Routes>
      </Router>
    </div>
  );
}
export default App;
