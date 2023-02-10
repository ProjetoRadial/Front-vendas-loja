import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/Login/LoginPage";

<Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="*" element={<h1>Página não encontrada!</h1>} />
</Routes>