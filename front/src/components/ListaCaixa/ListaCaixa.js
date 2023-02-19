import React from 'react';
import CartaoEscolar from '../../images/cartao-escolar.png'
import './ListaCaixa.css'

const ListaCaixa = (props) => {

    const produtos = props.produtos.produtosCaixa;
    const precos = props.produtos.precoServico;
    let total = props.precoTotal


    return (
        <div className='pt-3 h-100'>
            <div>
                <h5 className='text-end px-3 '>Pedido #10329</h5>
            </div>
            <div className='d-flex-column justify-content-between h-60 overflow-scroll' style={{'max-height': '400px'}}>
            {props.produtos.produtosCaixa.map((produto, index) => (
                <div className="container" style={{ 'backgroundColor': '#fff' }}>
                    <div className="row mb-5">
                        <div className="col d-flex border p-2">
                            <div className="col d-flex border p-2">
                                <div className="col d-flex ">
                                    <img className="img-fluid w-100 h-100" src={produto.imagem} alt="teste" style={{}} />
                                </div>
                                <div className="col mx-2">
                                    <h6>{produto.nome}</h6>
                                    <div>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h6>R${precos[index]}</h6>
                                            <button className='btn btn-outline-dark' onClick={() => props.onApagarProduto(index)} >x</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            ))}
            </div>

            <div className='footer'>
                <div className='d-flex justify-content-between aling-items-end px-3'>
                    <h6>Cliente:</h6>
                    <h6>Luiz Sérgio Marrano</h6>
                </div>
                <div className='d-flex justify-content-between px-3'>
                    <h6>Subtotal</h6>
                    <h6>{total}</h6>
                </div>
            </div>
        </div>
    );
}

export default ListaCaixa;