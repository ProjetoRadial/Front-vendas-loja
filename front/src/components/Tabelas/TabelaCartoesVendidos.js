import React, { useState, useEffect } from 'react';

const TabelaCartoesVendidos = ({ cartoesVendidos }) => {

    const [cartoesVendidosComum, setCartoesVendidosComum] = useState();
    const [cartoesVendidosSenior, setCartoesVendidosSenior] = useState();
    const [cartoesVendidosVT, setCartoesVendidosVT] = useState();
    const [cartoesVendidosEstudante, setCartoesVendidosEstudante] = useState();

    useEffect(() => {
        cartoesVendidos.map((cartao) => {
            if (cartao.cartao === "Comum") {
                setCartoesVendidosComum(cartao);
                console.log(cartao)
            } else if (cartao.cartao === "Sênior") {
                setCartoesVendidosSenior(cartao);
            } else if (cartao.cartao === "VT") {
                setCartoesVendidosVT(cartao);
            } else if (cartao.cartao === "Estudante") {
                setCartoesVendidosEstudante(cartao);
            }

            return cartao;
        });
    }, [cartoesVendidos]);
  
    // so carrega a pagina depois que todos os cartoes forem carregados, sem isso da erro
    if (!cartoesVendidosComum || !cartoesVendidosSenior || !cartoesVendidosVT || !cartoesVendidosEstudante) {
        return null;
      }

    //define o tamanho das colunas do gráfico em pixels de acordo com a quantidade de cartões vendidos, o valor do maior e 400px
    const calcularGrafico = (cartao, cartoesVendidos) => {

       

        //pega todos os cartoes e ordena do mais vendido para o menos vendido 
        const cartoesOrdenadosVendidos = (cartoesVendidos) => {
        
        console.log(cartoesVendidos)
        const cartoesOrdenados = cartoesVendidos.sort((a, b) => {
            return b.vendidos - a.vendidos;
        });
        return cartoesOrdenados;
    }
        
        const maior = cartoesOrdenadosVendidos(cartoesVendidos)[0].vendidos;
        const tamanho = (cartao.vendidos * 400) / maior;
        return cartao.tamanho = tamanho;
    }

    // armazena o tamanho de cada coluna em uma variavel
    const tamanhoComum = (calcularGrafico(cartoesVendidosComum, cartoesVendidos));
    const tamanhoSenior = (calcularGrafico(cartoesVendidosSenior, cartoesVendidos));
    const tamanhoVT = (calcularGrafico(cartoesVendidosVT, cartoesVendidos));
    const tamanhoEstudante = (calcularGrafico(cartoesVendidosEstudante, cartoesVendidos));

    


    console.log(cartoesVendidosComum, cartoesVendidosSenior, cartoesVendidosVT, cartoesVendidosEstudante)
    console.log(tamanhoComum, tamanhoSenior, tamanhoVT, tamanhoEstudante)

    return (

        

        <div className="col-7 p-3">
            <div className='' style={{"backgroundColor": "#fff", "box-shadow": "0.5px 0.5px 2px rgba(0, 0, 0, 0.25"}}>
                <div className="box-title d-flex align-items-center col-12 justify-content-between border-bottom">
                    <div className='d-flex align-items-center'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42 12.75V35.25C42 36.0167 41.7333 36.6667 41.2 37.2C40.6667 37.7333 40.0167 38 39.25 38H8.75C7.98333 38 7.33333 37.7333 6.8 37.2C6.26667 36.6667 6 36.0167 6 35.25V12.75C6 11.9833 6.26667 11.3333 6.8 10.8C7.33333 10.2667 7.98333 10 8.75 10H39.25C40.0167 10 40.6667 10.2667 41.2 10.8C41.7333 11.3333 42 11.9833 42 12.75ZM7.55 17.85H40.45V12.75C40.45 12.45 40.325 12.175 40.075 11.925C39.825 11.675 39.55 11.55 39.25 11.55H8.75C8.45 11.55 8.175 11.675 7.925 11.925C7.675 12.175 7.55 12.45 7.55 12.75V17.85ZM7.55 21.85V35.25C7.55 35.55 7.675 35.825 7.925 36.075C8.175 36.325 8.45 36.45 8.75 36.45H39.25C39.55 36.45 39.825 36.325 40.075 36.075C40.325 35.825 40.45 35.55 40.45 35.25V21.85H7.55Z" fill="#F8336C"/>
                        </svg>
                        <h3 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>Cartões vendidos</h3>
                    </div>
                    <div className='d-flex align-items-center p-2'>
                        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.05128 8.21553L0 1.16425L1.16425 0L7.05128 5.91265L12.9591 0.00481224L14.1026 1.16906L7.05128 8.21553Z" fill="#5F6368"/>
                        </svg>
                        <h4 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>Este mês</h4>
                    </div>
                </div>
                <div className="box-content d-flex flex-column justify-content-center p-4 " style={{"height": "386px"}}>
                    <div className='d-flex flex-column justify-content-between col-12 pt-2' style={{"height": "100%"}}>
                        <div className='d-flex align-content-center' style={{"height":"45px"}}>
                            <div style={{"width":"160px"}}>
                                <h4 className='px-2' style={{"fontWeight": "200","fontSize": "26px", "color": "#444444"}}>Comum</h4>
                            </div>
                            <div className="coluna" style={{"width": `${tamanhoComum}px`, "height": "100%", "backgroundColor":"#F8336C", "borderRadius": "0 10px 10px 0"}} />
                            <h4 className='px-3 '>{cartoesVendidosComum.vendidos}</h4>
                        </div>

                        <div className='d-flex align-content-center' style={{"height":"45px"}}>
                            <div style={{"width":"160px"}}>
                                <h4 className='px-2' style={{"fontWeight": "200","fontSize": "26px", "color": "#444444"}}>Senior</h4>
                            </div>
                            <div className="coluna" style={{"width": `${tamanhoSenior}px`, "height": "100%", "backgroundColor":"#F88B32", "borderRadius": "0 10px 10px 0"}} />
                            <h4 className='px-3'>{cartoesVendidosSenior.vendidos}</h4>
                        </div>

                        <div className='d-flex align-content-center' style={{"height":"45px"}}>
                            <div style={{"width":"160px"}}>
                                <h4 className='px-2' style={{"fontWeight": "200","fontSize": "26px", "color": "#444444"}}>VT</h4>
                            </div>
                            <div className="coluna" style={{"width": `${tamanhoVT}px`, "height": "100%", "backgroundColor":"#0CC095", "borderRadius": "0 10px 10px 0"}} />
    
                            <h4 className='px-3'>{cartoesVendidosVT.vendidos}</h4>

                        </div>

                        <div className='d-flex align-items-center' style={{"height":"45px"}}>
                            <div className='d-flex align-content-center' style={{"width":"160px"}}>
                                <h4 className='px-2 align-middle' style={{"fontWeight": "200","fontSize": "26px", "color": "#444444"}}>Estudante</h4>
                            </div>
                            <div className="coluna" style={{"width": `${tamanhoEstudante}px`, "height": "100%", "backgroundColor":"#556BB0", "borderRadius": "0 10px 10px 0"}} />
                            
                            <h4 className='px-3'>{cartoesVendidosEstudante.vendidos}</h4>

                        </div>

                    </div>
                </div>
            </div>


   

        </div>



        )
}

export default TabelaCartoesVendidos;