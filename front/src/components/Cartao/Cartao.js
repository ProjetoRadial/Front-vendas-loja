import './Cartao.css';
import React from 'react';

const Cartao = (props) => {
    
    const handleClick = (e) => {
        e.preventDefault();
        props.onSelecionarServico(props.produto, e.target.innerText);
    }
    
    return (
        
            <div className="col-md-4 col-sm-6 p-2">
                <div className="box">
                    <img src={props.produto.imagem} alt='Cartao comum' />
                    <div className="box-content">
                        <h3 className="title">{props.produto.nome}</h3>
                        <ul className="icon">
                            {Object.keys(props.produto.preco).map((key) => (
                                <li className='m-1' key={key} onClick={handleClick}><a className='btn btn-primary'>{key}</a></li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        
);
}

export default Cartao;