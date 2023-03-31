
const TabelaUltimasVendas = ({ultimasVendas}) => {



    return (
        <div className="col-5 p-3">
            <div className='' style={{"backgroundColor": "#fff", "box-shadow": "0.5px 0.5px 2px rgba(0, 0, 0, 0.25"}}>
                <div className="box-title d-flex align-items-center col-12 justify-content-between border-bottom">
                    <div className='d-flex p-2 align-items-center'>
                        <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.4 13.8C19.4333 13.8 18.625 13.475 17.975 12.825C17.325 12.175 17 11.3667 17 10.4C17 9.43333 17.325 8.625 17.975 7.975C18.625 7.325 19.4333 7 20.4 7C21.3667 7 22.175 7.325 22.825 7.975C23.475 8.625 23.8 9.43333 23.8 10.4C23.8 11.3667 23.475 12.175 22.825 12.825C22.175 13.475 21.3667 13.8 20.4 13.8ZM7.89999 20.6C7.19999 20.6 6.57499 20.325 6.02499 19.775C5.47499 19.225 5.19999 18.6 5.19999 17.9V2.9C5.19999 2.16666 5.47499 1.53333 6.02499 0.999997C6.57499 0.466664 7.19999 0.199997 7.89999 0.199997H32.9C33.6333 0.199997 34.2667 0.466664 34.8 0.999997C35.3333 1.53333 35.6 2.16666 35.6 2.9V17.9C35.6 18.6 35.3333 19.225 34.8 19.775C34.2667 20.325 33.6333 20.6 32.9 20.6H7.89999ZM9.59999 19.5H31.2C31.2 18.6 31.525 17.825 32.175 17.175C32.825 16.525 33.6 16.2 34.5 16.2V4.6C33.6 4.6 32.825 4.275 32.175 3.625C31.525 2.975 31.2 2.2 31.2 1.3H9.59999C9.59999 2.2 9.27499 2.975 8.62499 3.625C7.97499 4.275 7.19999 4.6 6.29999 4.6V16.2C7.19999 16.2 7.97499 16.525 8.62499 17.175C9.27499 17.825 9.59999 18.6 9.59999 19.5ZM29.7 25.4H3.09999C2.39999 25.4 1.77499 25.125 1.22499 24.575C0.674994 24.025 0.399994 23.4 0.399994 22.7V6.1H1.49999V22.7C1.49999 23.1 1.66666 23.4667 1.99999 23.8C2.33333 24.1333 2.69999 24.3 3.09999 24.3H29.7V25.4ZM7.89999 19.5H6.29999V1.3H7.89999C7.46666 1.3 7.09166 1.45833 6.77499 1.775C6.45833 2.09166 6.29999 2.46666 6.29999 2.9V17.9C6.29999 18.3333 6.45833 18.7083 6.77499 19.025C7.09166 19.3417 7.46666 19.5 7.89999 19.5Z" fill="#0BFD32"/>
                        </svg>
                        <h3 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>Últimas vendas</h3>
                    </div>
                    
                </div>
                <div className="box-content d-flex flex-column">
                    <div className='d-flex justify-content-between col-12 pt-2'>
                        <h4 className='px-2 col-5' style={{"fontWeight": "200", "color": "#444444"}}>Cartão</h4>
                        <h4 className='px-2 col-4' style={{"fontWeight": "200", "color": "#444444"}}>Vendedor</h4>
                        <h4 className='px-2 col-3 text-end' style={{"fontWeight": "200", "color": "#444444"}}>Valor</h4>
                    </div>
                    {ultimasVendas.map((venda) => (
                        <div className='d-flex justify-content-between align-items-center col-12 border-top p-2'>
                        <h5 className='col-5' style={{"fontWeight": "200", "color": "#444444"}}>{venda.cartao}</h5>
                        <h5 className='col-4    ' style={{"fontWeight": "200", "color": "#444444"}}>{venda.vendedor}</h5>
                        <h5 className='col-3 text-end' style={{"fontWeight": "200", "color": "#444444"}}>{venda.valor}</h5>
                </div>
                ))}
            </div>
        </div>
    </div>
    )}

export default TabelaUltimasVendas