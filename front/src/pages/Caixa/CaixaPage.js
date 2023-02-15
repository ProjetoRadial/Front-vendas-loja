//simple cashier app with in className bootstrap 

import React from 'react'
import './CaixaPage.css'
import { useState } from 'react'
import { useEffect } from 'react'
import OnpagLogo from "../../images/logoOnpag.png"
import ProdutosIcon from "../../images/produtos-icon.png"
import CartaoTop from "../../images/cartao-top.png"
import CartaoComum from "../../images/cartao-comum.png"
import CartaoSenior from "../../images/cartao-senior.png"
import CartaoVT from "../../images/cartao-vt.png"
import CartaoEscolar from "../../images/cartao-escolar.png"

const produtos = [
    {
        id: 1,
        nome: 'Cartão comum',
        imagem: CartaoComum,
        preco: {
            'primeiraVia': 0,
            'segundaVia': 26.50,
            'recarga': 0
        }
    },
    {
        id: 2,
        nome: 'Cartão senior',
        imagem: CartaoSenior,
        preco: {
            'primeiraVia': 0,
            'segundaVia': 26.50,
            'recarga': 0
        }
    },
    {
        id: 3,
        nome: 'Cartão VT',
        imagem: CartaoVT,
        preco: {
            'primeiraVia': 0,
            'segundaVia': 26.50,
            'recarga': 0
        }
    },
    {
        id: 4,
        nome: 'Cartão escolar',
        imagem: CartaoEscolar,
        preco: {
            'primeiraVia': 0,
            'segundaVia': 26.50,
            'recarga': 0
        }
    }
]

export const CaixaPage = () => {
    const [produtosCaixa, setProdutosCaixa] = useState([])

    useEffect(() => {
        const produto = produtos.map(produto => {
            return {
                ...produto,
                quantidade: 1
            }
        })
        setProdutosCaixa(produto)
    }, [])



    return (
        <div className='vh-100 text-center p-1'>
            <div className='card h-100'>
                <div className='card-header'>
                    <h5 className='text-center'>Caixa</h5>
                </div>
                <div className='card-body-responsive flex h-100'>
                    <div className='row h-100' style={{ 'backgroundColor': '#f8f8f8' }}>

                        <div className='col-9 d-flex flex-wrap justify-content-between p-2' >
                            <div className="card m-3" style={{ "width": "18rem", 'backgroundColor': '#f8f8f8' }}>
                                <img className="card-img-top p-2" src={CartaoTop} alt="teste" />
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">Cartão TOP</h5>
                                    <a href="/" class="btn btn-primary">Selecionar</a>
                                </div>
                            </div>

                            <div className="card m-3" style={{ "width": "18rem", }} >
                                <img className="card-img-top p-2" src={CartaoComum} alt="teste" />
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">Cartão comum</h5>
                                    <a href="/" class="btn btn-primary">Selecionar</a>
                                </div>
                            </div>

                            <div className="card m-3" style={{ "width": "18rem", 'backgroundColor': '#f8f8f8' }}>
                                <img className="card-img-top p-2" src={CartaoSenior} alt="teste" />
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">Cartão senior</h5>
                                    <a href="/" >
                                        <button type="button" class="btn btn-primary btn-rounded">Primary</button>
                                    </a>
                                </div>
                            </div>
                            <div className="card m-3" style={{ "width": "18rem", 'backgroundColor': '#f8f8f8' }}>
                                <img className="card-img-top p-2" src={CartaoVT} alt="teste" />
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">Cartão VT</h5>
                                    <a href="/" class="btn btn-primary">Selecionar</a>
                                </div>
                            </div>
                            <div className="card m-3" style={{ "width": "18rem", 'backgroundColor': '#f8f8f8' }}>
                                <img className="card-img-top p-2" src={CartaoEscolar} alt="teste" />
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">Cartão Escolar</h5>
                                    <a href="/" class="btn btn-primary">Selecionar</a>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-4 col-sm-6">
                                        <div className="box">
                                            <img src={CartaoComum} alt='Cartao comum' />
                                            <div className="box-content">
                                                <h3 className="title">Cartão Comum</h3>

                                                <ul className="icon">
                                                    <li href='#' ><a href='#'><i className="fa fa-search"></i></a></li>
                                                    <li ><i className="fa fa-link"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="box">
                                            <img src={CartaoEscolar}/>
                                                <div class="box-content">
                                                    <h3 class="title">Cartão escolar</h3>
                                                    
                                                    <ul class="icon">
                                                        <li onClick={() => setProdutosCaixa(produtos[1])}><a href="#"><i class="fa fa-search"></i></a></li>
                                                        <li onClick={() => console.log(produtosCaixa)}><a href="#"><i class="fa fa-link"></i></a></li>
                                                    </ul>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

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