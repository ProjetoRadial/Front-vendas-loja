import './Cartao.css';

const Cartao = (props) => {
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.innerText);
        props.onSelecionarServico(props.produto, e.target.innerText);
    }
    
    return (
        
            <div className="col-md-4 col-sm-6">
                <div className="box">
                    <img src={props.produto.imagem} alt='Cartao comum' />
                    <div className="box-content">
                        <h3 className="title">{props.produto.nome}</h3>
                        <ul className="icon">
                            {Object.keys(props.produto.preco).map((key) => (
                                <li onClick={handleClick}><a className='btn btn-primary'>{key}</a></li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        
);
}

export default Cartao;