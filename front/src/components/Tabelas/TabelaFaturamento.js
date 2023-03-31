
const TabelaFaturamento = ({ meses }) => {

    return (
        
            <div className='col-8 p-3'>
                <div className='' style={{"backgroundColor": "#fff", "box-shadow": "0.5px 0.5px 2px rgba(0, 0, 0, 0.25"}}>
                    <div className="box-title d-flex align-items-center col-12 justify-content-between border-bottom">
                        <div className='d-flex align-items-center'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.30001 35L5.20001 33.9L18.5 20.55L26.7 28.7L40.3 15.2H33.1V13.7H42.8V23.35H41.3V16.35L26.65 31L18.5 22.85L6.30001 35Z" fill="#FFF500"/>
                            </svg>
                            <h3 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>Faturamento</h3>
                        </div>
                        <div className='d-flex align-items-center p-2'>
                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.05128 8.21553L0 1.16425L1.16425 0L7.05128 5.91265L12.9591 0.00481224L14.1026 1.16906L7.05128 8.21553Z" fill="#5F6368"/>
                            </svg>
                            <h5 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>2023</h5>
                        </div>
                    </div>
                    <div className="box-content d-flex flex-column">
                        <div className='d-flex justify-content-between col-12 pt-2'>
                            {meses.map((mes) => (
                                <h6 className='p-1 col-1 text-center' style={{"fontWeight": "200", "color": "#444444"}}>{mes.sigla}</h6>
                            ))}
                        </div>
                                    
                        <div className='d-flex justify-content-between align-items-center col-12 border-top p-2'>
                            <div className='d-flex flex-column col-4 p-3'>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Cartões vendidos:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>2042</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>1ª Via:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>1200</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>2ª Via:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>842</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Comum:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>992</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Sênior:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>602</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>VT:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>248</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Estudante:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>200</h6>
                                </div>
                            </div>
                            <div className='d-flex flex-column col-4 p-3'>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Faturamento total:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 42.100</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>1ª Via:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 0</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>2ª Via:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 42.100</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Comum:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 15.000</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Sênior:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 17.000</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>VT:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 5.000</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Estudante:</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 5.100</h6>
                                </div>
                            </div>
                            <div className='d-flex flex-column col-4 p-3'>
                                <div className='d-flex justify-content-center'>
                                    <h6 className='text-center' style={{"fontWeight": "200", "color": "#444444"}}>Faturamento por funcionário:</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Luiz Marrano</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 8.000</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Tiago Molero</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 7.200</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Wesley Araújo</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 14.000</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Adrian Souza</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 5.600</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Roger Guedes</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 5.000</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Yuri Alberto</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 2.000</h6>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>Cassio Ramos</h6>
                                    <h6 style={{"fontWeight": "200", "color": "#444444"}}>R$ 400</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    
    )
}

export default TabelaFaturamento
