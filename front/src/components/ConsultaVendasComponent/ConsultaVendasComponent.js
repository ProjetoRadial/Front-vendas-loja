import { useEffect, useState } from 'react';
import axios from 'axios'

export const ConsultaVendasComponent = function () {
    
    const [data, setData] = useState([]);
    let total = 0;
    let dinheiro = 0;
    let credito = 0;
    let pix = 0;
    let debito = 0;
    let taxa = 0;

    async function getData(){
        const {data} = await axios.get('http://172.16.2.103:3001/dashboard')
        setData(data);
    };

    useEffect(()=>{
        getData()
    }, [])
        
    return (
        <div>
            <table className="table" class="table table-striped">
                <thead>
                    <tr><td colSpan={7} style={{"textAlign":"center", "fontSize":"25px"}}>Vendas do dia</td></tr>
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
                    {data.map((campo)=>{
                        total = total + campo.valor;
                        if(campo.formaPagamento === "Debito")   { debito    = debito + campo.valor; taxa = 1; };
                        if(campo.formaPagamento === "Credito")  { credito   = credito + campo.valor; taxa = 2; };
                        if(campo.formaPagamento === "Pix")      { pix       = pix + campo.valor; taxa = 0; };
                        if(campo.formaPagamento === "Dinheiro") { dinheiro  = dinheiro + campo.valor; taxa = 0; };
                        
                        return(
                        <tr key={campo.id}>
                            <td>{campo.id}</td>
                            <td>{campo.dataHora}</td>
                            <td>{campo.produto}</td>
                            <td>{(campo.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>                            
                            <td>{campo.formaPagamento}</td>
                            <td>{taxa}%</td>
                            <td>{(campo.valor*taxa/100+(campo.valor)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                        </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr><td colSpan={6}><strong>Pix</strong></td><td><strong>{pix.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</strong></td></tr>
                    <tr><td colSpan={6}><strong>Cartão de Debito</strong></td><td><strong>{debito.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</strong></td></tr>
                    <tr><td colSpan={6}><strong>Cartão de Credito</strong></td><td><strong>{credito.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</strong></td></tr>
                    <tr><td colSpan={6}><strong>Dinheiro</strong></td><td><strong>{dinheiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></td></tr>
                    <tr><td colSpan={6}><strong>Saldo Total</strong></td><td><strong>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></td></tr>
                </tfoot>
            </table>
        </div>
    );
};