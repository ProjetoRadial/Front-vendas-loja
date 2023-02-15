//simple cashier app with in className bootstrap 

import React from 'react'
import Cartao from '../../components/Cartao/Cartao'
import './CaixaPage.css'
import { useState } from 'react'
import OnpagLogo from "../../images/logoOnpag.png"
import CartaoComum from "../../images/cartao-comum.png"
import CartaoSenior from "../../images/cartao-senior.png"
import CartaoVT from "../../images/cartao-vt.png"
import CartaoEscolar from "../../images/cartao-escolar.png"

export const CaixaPage = () => {

    const produtos = [
        {
            id: 1,
            nome: 'Cartão comum',
            imagem: CartaoComum,
            preco: {
                '1ª via': 0,
                '2ª via': 26.50,
                'Recarga': 0
            }
        },
        {
            id: 2,
            nome: 'Cartão senior',
            imagem: CartaoSenior,
            preco: {
                '1ª via': 0,
                '2ª via': 26.50,
                'Recarga': 0
            }
        },
        {
            id: 3,
            nome: 'Cartão VT',
            imagem: CartaoVT,
            preco: {
                '1ª via': 0,
                '2ª via': 26.50,
                'Recarga': 0
            }
        },
        {
            id: 4,
            nome: 'Cartão escolar',
            imagem: CartaoEscolar,
            preco: {
                '1ª via': 0,
                '2ª via': 26.50,
                'Recarga': 0
            }
        }
    ]

    const [produtosCaixa, setProdutosCaixa] = useState([])
    const [precoServico, setPrecoServico] = useState([])



    const adicionarProduto = (produto) => {
        setProdutosCaixa([...produtosCaixa, produto])
        console.log(produtosCaixa)
    }

    const selecionarServico = (produto, servico) => {
        adicionarProduto(produto)
        setPrecoServico([...precoServico, produto.preco[servico]])
        console.log(precoServico)
    }

    const removeProduto = (produto) => {
        setProdutosCaixa(produtosCaixa.filter(p => p.id !== produto.id))
    }

    







    return (
        <div className='vh-100 text-center p-1'>
            <div className='card h-100'>
                <div className='card-header'>
                    <h5 className='text-center'>Caixa</h5>
                </div>
                <div className='card-body-responsive flex h-100'>
                    <div className='row h-100' style={{ 'backgroundColor': '#f8f8f8' }}>

                        <div className='col-9 d-flex flex-wrap justify-content-between p-2' >



                            {produtos.map((produto) => (

                                <Cartao key={produto.id} produto={produto} onSelecionarServico={selecionarServico}/>
                            ))}


                        </div>
                        <div className='col-3 border' >
                            <div className='pt-3 h-100'>
                                <div>
                                    <h5 className='text-end px-3 '>Pedido #10329</h5>
                                </div>
                                <div className="container" style={{ 'backgroundColor': '#fff' }}>
                                    <div className="row mt-5">
                                        <div class="col d-flex border p-2">
                                            <div class="col d-flex ">
                                                <img className="img-fluid w-100 h-100" src={CartaoEscolar} alt="teste" style={{}} />
                                            </div>
                                            <div class="col mx-2">
                                                <h6>Cartão escolar - Segunda via</h6>
                                                <div>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <h6>R$26,50</h6>
                                                        <button className='btn btn-outline-dark'>x</button>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className=''>
                                    <div className='d-flex justify-content-between aling-items-end px-3'>
                                        <h6>Cliente:</h6>
                                        <h6>Luiz Sérgio Marrano</h6>
                                    </div>
                                    <div className='d-flex justify-content-between px-3'>
                                        <h6>Subtotal</h6>
                                        <h6>R$ 26,50</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>

        
    )
}

export default CaixaPage