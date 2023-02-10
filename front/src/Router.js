import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LoginPage } from "./pages/Login/LoginPage.js"

import { HomePage } from "./pages/Home/HomePage.js"
import { CadastroFuncionarioPage } from "./pages/Cadastro/CadastroFuncionario/CadastroFuncionarioPage.js"
import { CadastroProdutoPage } from './pages/Cadastro/CadastroProduto/CadastroProdutoPage.js';
import { CadastroAgendamentoPage } from './pages/Cadastro/CadastroAgendamento/CadastroAgendamento.js';
// import { Caixa } from './pages/Caixa/Caixa.js';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/cadastro/produto' element={<CadastroProdutoPage/>} />
          <Route path='/cadastro/agendamento' element={<CadastroAgendamentoPage/>} />
          <Route path='/cadastro/funcionario' element={<CadastroFuncionarioPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
