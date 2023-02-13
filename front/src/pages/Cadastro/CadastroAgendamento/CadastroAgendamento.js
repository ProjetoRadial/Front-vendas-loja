import Sidebar from "../../../components/Sidebar/Sidebar"

//cadastrar agendamento com data e hora 
export const CadastroAgendamentoPage = () => {
    return (
        <section className="vh-100">

            <Sidebar />
            <div className="container h-100" style={{ "paddingLeft": "260px" }}>
                <div className="row d-flex h-100">
                    <div className="d-flex justify-content-center">
                        <h1 className='pt-4'>Cadastro de Agendamento</h1>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="p-4">
                                <div className=" text-center">
                                    <h4 className="text-dark-50 mt-0 font-weight-bold">Preencha os campos abaixo</h4>
                                    <p className="text-muted mb-4">Cadastre um agendamento</p>
                                </div>
                                <form className='p-2'>

                                    <div className="d-flex text-center mb-3 mx-5">
                                        <label className="" htmlFor="codigo">Código</label>
                                        <div className="input-group">
                                        <input type="text" className="form-control pt-2" id="codigo" placeholder="Insira o código do agendamento" />
                                        <button class="btn btn-outline-secondary text-center" type="button" id="button-addon1">Buscar</button>
                                        </div>
                                    </div>

                                    <div className="mb-3 mx-5">
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" className="form-control mt-2" id="nome" placeholder="Luiz Sérgio Marrano" disabled/>
                                    </div>
                                
                                    <div className="mb-3 mx-5">
                                        <label htmlFor="data">Data</label>
                                        <input type="date" className="form-control mt-2" id="data" placeholder="Insira a data do agendamento" />
                                    </div>
                                    <div className="d-flex align-content-center">
                                        <div className="col-md-8 mb-3 mx-5 justify-content-end ">
                                            <label className="col-md-2 " htmlFor="hora">Hora</label>
                                            <input type="time" className="form-control mt-2 col-md-2" id="hora" placeholder="Insira a hora do agendamento" />
                                        </div>

                                        
                                        

                                        <div className="d-flex col-md-2 align-items-center pt-2 justify-content-center">
                                            <button type="submit align-self-center" className="btn btn-primary mx-5">Cadastrar</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}