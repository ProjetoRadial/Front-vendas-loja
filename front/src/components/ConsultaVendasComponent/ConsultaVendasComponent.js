import env from "react-dotenv";
import React from "react";

export default class ConsultaVendasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vendas: [],
            totalPix: 0,
            totalCredito: 0,
            totalDebito: 0,
            totalDinheiro: 0,
            totalGeral: 0
        };
        this.funcao = this.funcao.bind(this);
    }
    async funcao(event) {
        const temp = await fetch(env.API_URL_DASHBOARD);
        const temp1 = await temp.json();
        temp1.map((venda) => {
            if (venda.formaPagamento === "Credito") {
                venda.taxa = 2;
                venda.valorTotal = (venda.valor * 0.02 + venda.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                this.setState((prevState) => {
                    return { totalCredito: prevState.totalCredito + venda.valor }
                })
            }
            else if (venda.formaPagamento === "Debito") {
                venda.taxa = 1;
                venda.valorTotal = (venda.valor * 0.01 + venda.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                this.setState((prevState) => {
                    return { totalDebito: prevState.totalDebito + venda.valor }
                })
            }
            else if (venda.formaPagamento === "Pix") {
                venda.taxa = 0;
                venda.valorTotal = (venda.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                this.setState((prevState) => {
                    return { totalPix: prevState.totalPix + venda.valor }
                })
            } else {
                venda.taxa = 0;
                venda.valorTotal = (venda.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                this.setState((prevState) => {
                    return { totalDinheiro: prevState.totalDinheiro + venda.valor }
                })
            }
            
        });
        this.setState({ vendas: temp1 });
    };

    render() {
        const linhas = this.state.vendas;
        return (
            <>
                <tbody>
                <tr><td onClick={this.funcao}>c</td></tr>
                {linhas.map((linha) => {
                    return (
                        <tr key={linha.id}>
                            <td>{linha.id}</td>
                            <td>{linha.dataHora}</td>
                            <td>{linha.produto}</td>
                            <td>{linha.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                            <td>{linha.formaPagamento}</td>
                            <td>{linha.taxa}%</td>
                            <td>{linha.valorTotal}</td>
                        </tr>
                    )
                })}
                </tbody>
                    <tfoot>
                        <tr><td colSpan={6}><strong>Pix</strong></td><td><strong>{this.state.totalPix}</strong></td></tr>
                        <tr><td colSpan={6}><strong>Cartão de Debito</strong></td><td><strong>{this.state.totalDebito}</strong></td></tr>
                        <tr><td colSpan={6}><strong>Cartão de Credito</strong></td><td><strong>{this.state.totalCredito}</strong></td></tr>
                        <tr><td colSpan={6}><strong>Dinheiro</strong></td><td><strong>{this.state.totalDinheiro}</strong></td></tr>
                        <tr><td colSpan={6}><strong>Saldo Total</strong></td><td><strong>{this.state.totalGeral}</strong></td></tr>
                    </tfoot>
            </>
        );
    }
};