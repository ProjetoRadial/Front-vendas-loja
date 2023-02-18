import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import loja from "../../images/loja.png";
import pos from "../../images/foto-pos.png";
import { useState } from "react";

export const Configuracoes = () => {
    const dataSession = JSON.parse(sessionStorage.session);
    const [lista, setLista] = useState([]);
    let [key, setKey] = useState([]);
    

    const posLojas = {
        suzano:[
            "Suzano 1",
            "Suzano 2",
            "Suzano 3"
        ],
        poa:[
            "Poá"
        ],
        ferraz:[
            "Ferraz"
        ]
    }
    return (
        <>
            <Sidebar />
            <h1 style={{ "textAlign": "center" }}>Configuração para {dataSession.dataUser[0].nome}</h1>
            <div className="position-absolute top-50 start-50 translate-middle">
                <form action="/home">
                    <div className="card mb-3" style={{ "maxWidth": " 540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={loja} className="img-fluid rounded-start" alt="foto-da-loja-de-suzano" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Loja</h5>
                                    <p className="card-text">Selecione a loja.</p>
                                    <p className="card-text"><small className="text-muted">
                                        <select className="form-select" aria-label="Default select example" onChange={(event) => {
                                            sessionStorage.setItem("LOJA", event.target.value)
                                            setLista((posLojas[event.target.value]));
                                            
                                        }}>
                                            <option defaultValue="1">Selecione a loja</option>
                                            <option value="suzano">Suzano</option>
                                            <option value="poa">Poá</option>
                                            <option value="ferraz">Ferraz</option>
                                        </select></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{ "maxWidth": " 540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={pos} className="img-fluid rounded-start" alt="foto-pos" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">POS</h5>
                                    <p className="card-text">Selecione o POS.</p>
                                    <p className="card-text"><small className="text-muted">
                                        <select id="pos" className="form-select" aria-label="Default select example" onChange={(event) => {
                                            sessionStorage.setItem("POS", event.target.value)
                                            console.log(sessionStorage);
                                        }}>
                                            <option defaultChecked value={0}>Seleciona o POS</option>
                                            {lista.map((pos)=>{
                                                key++                                    
                                                return(<option key={key} value={pos}>{pos}</option>)
                                            })}
                                        </select></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="btn btn-primary">Alterar</button>
                    </div>
                </form>
            </div>

        </>
    );
};
