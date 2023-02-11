import { ConsultaVendasComponent } from "../../components/ConsultaVendasComponent/ConsultaVendasComponent";
import Sidebar from "../../components/Sidebar/Sidebar";

export const HomePage = () => {
    return (
        <>
            <Sidebar/>
            <h1 style={{"textAlign":"center"}}>Sistema de vendas da Loja</h1>
            <ConsultaVendasComponent/>
        </>
    );
};