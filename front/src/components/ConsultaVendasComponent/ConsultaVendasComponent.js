export const ConsultaVendasComponent = () => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr><td colSpan={11} style={{"textAlign":"center", "fontSize":"25px"}}>Vendas do dia</td></tr>
                    <tr>
                        <td>#id</td>
                        <td>Hora</td>
                        <td>Codigo do cliente</td>
                        <td>Nome</td>
                        <td>Produto</td>
                        <td>Valor Unitário</td>
                        <td>Quantidade</td>
                        <td>Forma de Pagamento</td>
                        <td>Valor Total</td>
                        <td>Anexo</td>
                        <td>obs.</td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
                <tfoot>
                    <tr><td colSpan={10}>Saldo do caixa</td><td>R$ 150,00</td></tr>
                    <tr><td colSpan={10}>Saldo Total</td><td>R$ 200,00</td></tr>
                </tfoot>
            </table>
        </div>
    );
};