import React, { useEffect } from 'react'
import Cartao from '../../components/Cartao/Cartao'
import ListaCaixa from '../../components/ListaCaixa/ListaCaixa'
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
                '2ª via': 26.50
            }
        },
        {
            id: 2,
            nome: 'Cartão senior',
            imagem: CartaoSenior,
            preco: {
                '1ª via': 0,
                '2ª via': 50.00
            }
        },
        {
            id: 3,
            nome: 'Cartão VT',
            imagem: CartaoVT,
            preco: {
                '1ª via': 0,
                '2ª via': 26.50
            }
        },
        {
            id: 4,
            nome: 'Cartão escolar',
            imagem: CartaoEscolar,
            preco: {
                '1ª via': 0,
                '2ª via': 26.50
            }
        }
    ]

    const [produtosCaixa, setProdutosCaixa] = useState([])
    const [precoServico, setPrecoServico] = useState([])
    const [precoTotal, setPrecoTotal] = useState(0)



    const selecionarServico = (produto, servico) => {
        setProdutosCaixa([...produtosCaixa, produto])
        setPrecoServico([...precoServico, produto.preco[servico]])       
        console.log(precoTotal)
    }

    const apagarProduto = (index) => {
        setProdutosCaixa(produtosCaixa.filter((_, i) => i !== index))
        setPrecoServico(precoServico.filter((_, i) => i !== index))
    }


    const calcularPrecoTotal = () => {
        let total = 0
        precoServico.forEach((preco) => {
            total += preco
        })
        setPrecoTotal(total)
    }

    useEffect(() => {
        calcularPrecoTotal()
    }, [produtosCaixa, precoServico])

    return (
        <div className='vh-100 text-center p-1'>
            <div className='card h-100'>
                <div className='card-header'>
                    <h5 className='text-center'>Caixa</h5>
                </div>
                <div className='card-body-responsive flex h-100'>
                    <div className='d-flex flex-wrap h-100' style={{ 'backgroundColor': '#f8f8f8' }}>
                        <div className='col-9 d-flex flex-wrap justify-content-between p-2' >
                            {produtos.map((produto) => (
                                <Cartao
                                    key={produto.id}
                                    produto={produto}
                                    onSelecionarServico={selecionarServico} />
                            ))}
                        </div>
                        <div className='col-3 border' >
                            <ListaCaixa
                                produtos={{ produtosCaixa, precoServico }}
                                precoTotal={precoTotal}
                                onApagarProduto={apagarProduto}
                                onCalcularPrecoTotal={calcularPrecoTotal} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaixaPage