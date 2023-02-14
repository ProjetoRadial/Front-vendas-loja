//simple cashier app with in className bootstrap 

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import OnpagLogo from "../../images/logoOnpag.png"
import ProdutosIcon from "../../images/produtos-icon.png"

//products list mock
const products = [
    {
        id: 1,
        nome: 'Coca-cola',
        preco: 5.00
    },
    {
        id: 2,
        nome: 'Fanta',
        preco: 5.00
    },
    {
        id: 3,
        nome: 'Sprite',
        preco: 5.00
    }

]


export const CaixaPage = () => {
    return (<div className='vh-100 text-center p-1'>
        <div className='card h-100'>
            <div className='card-body flex h-100'>
                <div className='row h-100' style={{ "width": "140px" }}>
                    <div className='flex align-items-center justify-content-center p-1'>
                        <a className='d-block text-decoration-none' href='/'>
                            <div className='flex align-items-center justify-content-center'>
                                <img src={OnpagLogo} style={{ "height": "40px" }} alt='Onpag Logo'></img>
                            </div>
                            <div className='fs-4 text-black p-10'>
                                <h3 className='pt-2'>CAIXA</h3>
                            </div>

                        </a>
                    </div>
                    <div className='nav-container overflow-hidden' style={{"backgroundColor":"black"}}>
                        <div className='position-relative h-100'>
                            <ul className='nav nav-tabs'>
                                <li className='nav-item'>
                                    <a className='nav-link active' href='#'>
                                        <div className='card'>
                                            <div className='card-body' style={{"backgroundColor": "gold"}}>
                                                <img src={ProdutosIcon} style={{ "height": "40px" }} alt='Produtos Icon'></img>
                                                <h5 className='card-title'>Todos os Produtos</h5>
                                            </div>
                                            
                                        </div>
                                    </a>
                                </li> <li className='nav-item'>
                                    <a className='nav-link active' href='#'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <img src={ProdutosIcon} style={{ "height": "40px" }} alt='Produtos Icon'></img>
                                                <h5 className='card-title'>Todos os Produtos</h5>
                                            </div>
                                            
                                        </div>
                                    </a>
                                </li> <li className='nav-item'>
                                    <a className='nav-link active' href='#'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <img src={ProdutosIcon} style={{ "height": "40px" }} alt='Produtos Icon'></img>
                                                <h5 className='card-title'>Todos os Produtos</h5>
                                            </div>
                                            
                                        </div>
                                    </a>
                                </li> <li className='nav-item'>
                                    <a className='nav-link active' href='#'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <img src={ProdutosIcon} style={{ "height": "40px" }} alt='Produtos Icon'></img>
                                                <h5 className='card-title'>Todos os Produtos</h5>
                                            </div>
                                            
                                        </div>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                </li>
                                <li className='nav-item'>
                                </li>
                                <li className='nav-item'>
                                </li>
                                <li className='nav-item'>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
    )
}

export default CaixaPage