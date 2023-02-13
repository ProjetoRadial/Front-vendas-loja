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

const info = {
    id: "0001",
    DataHora: "13/02/2023 10:00:00",
    CodCli: '123456',
    NomeCli: 'Homem de neve',
    Produto: {
        itensVendidos: {
            idVenda: "0001",
            idItem: "7"
        }
    }
}

console.log(info);