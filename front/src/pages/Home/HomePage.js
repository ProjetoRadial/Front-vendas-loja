import React from "react";
import { ConsultaVendasComponent } from "../../components/ConsultaVendasComponent/ConsultaVendasComponent";
import Sidebar from "../../components/Sidebar/Sidebar";

export const HomePage = () => {
    const dataSession = JSON.parse(sessionStorage.session)
    


    return (
        <>
            <Sidebar />
            <h1 style={{ "textAlign": "center" }}>Fechamento de {dataSession.dataUser[0].nome}</h1>
            <div>
                <table className="table table table-striped">
                    <thead>
                        <tr><td colSpan={7} style={{ "textAlign": "center", "fontSize": "25px" }}><strong>Loja: </strong> {sessionStorage.getItem("LOJA")} <strong className="ms-5">POS: </strong>{sessionStorage.getItem("POS")}</td></tr>
                        <tr>
                            <td>#id</td>
                            <td>Hora</td>
                            <td>Produto</td>
                            <td>Valor Unitário</td>
                            <td>Forma de Pagamento</td>
                            <td>taxa</td>
                            <td>Valor Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <ConsultaVendasComponent/> */}
                    </tbody>
                    <tfoot>
                        <tr><td colSpan={6}><strong>Pix</strong></td><td><strong>R$ 0,00</strong></td></tr>
                        <tr><td colSpan={6}><strong>Cartão de Debito</strong></td><td><strong>R$ 0,00</strong></td></tr>
                        <tr><td colSpan={6}><strong>Cartão de Credito</strong></td><td><strong>R$ 0,00</strong></td></tr>
                        <tr><td colSpan={6}><strong>Dinheiro</strong></td><td><strong>R$ 0,00</strong></td></tr>
                        <tr><td colSpan={6}><strong>Saldo Total</strong></td><td><strong>R$ 0,00</strong></td></tr>
                    </tfoot>

                </table>
            </div>

        </>
    );
};
