import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';


export const CadastroFuncionarioPage = () => {

    return (

        <section className="vh-100">

            <Sidebar />
            <div className="container h-100">
                <div className="row d-flex h-100">
                    <div className="d-flex justify-content-center">
                        <h1 className='pt-4'>Cadastro de Funcionário</h1>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="p-4">
                                <div className="text-center">
                                    <h4 className="text-dark-50 mt-0 font-weight-bold">Preencha os campos abaixo</h4>
                                    <p className="text-muted mb-4">Cadastre um funcionário</p>
                                </div>
                                <form className='p-2' onSubmit={function (event) {
                                    event.preventDefault();
                                 
                                 
                                    
                                }}>
                                    <div className="mb-3 mx-5">
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" className="form-control mt-2" id="nome" placeholder="Insira o nome do funcionário" />
                                    </div>
                                    <div className="d-flex">
                                        <div className="col-md-8 mb-3 mx-5 justify-content-end">
                                            <label className="col-md-2 " htmlFor="registro">Registro</label>
                                            <input type="text" className="form-control mt-2 col-md-2" id="registro" placeholder="Insira o registro do funcionário" />
                                        </div>
                                        <div className="d-flex col-md-2 align-items-center pt-2">
                                            <input type="checkbox" className="form-check-input me-1 " id="admin" />
                                            <label htmlFor="admin">Administrador</label>
                                        </div>
                                    </div>
                                    <div className="d-flex ">
                                        <div className="col-md-4 mb-3 mx-5 justify-content-end">
                                            <label htmlFor="senha">Senha</label>
                                            <input type="password" className="form-control mt-2" id="senha" placeholder="Insira a senha do funcionário" />
                                        </div>
                                        <div className="col-md-4 mb-3 mx-5 justify-content-end">
                                            <label htmlFor="confirmar-senha">Confirme a senha</label>
                                            <input type="password" className="form-control mt-2" id="confirmar-senha" placeholder="Insira a senha do funcionário" />
                                        </div>
                                    </div>
                                    <div className="text-center pt-3">
                                        <button type="submit" className="btn btn-primary w-md" >Cadastrar</button>
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
