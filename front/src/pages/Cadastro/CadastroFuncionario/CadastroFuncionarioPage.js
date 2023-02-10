import Sidebar from '../../../components/Sidebar/Sidebar'

export const CadastroFuncionarioPage = () => {
    return (

        <section className="vh-100">

            <Sidebar />
            <div className="container h-100" style={{ "paddingLeft": "260px" }}>
                <div className="row d-flex justify-content-center h-100">
                    <div className="d-flex justify-content-center">
                        <h1 className='pt-4'>Cadastro de Funcionário</h1>
                    </div>
                    <div className="panel">
                        <div className="panel-body">
                            <div className="p-4">
                                <div className="panel-heading text-center">
                                    <h4 className="text-dark-50 mt-0 font-weight-bold">Preencha os campos abaixo</h4>
                                    <p className="text-muted mb-4">Cadastre um funcionário</p>
                                </div>
                                <form className='p-2'>
                                    <div className=" mb-3 mx-5">
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" className="form-control mt-2" id="nome" placeholder="Insira o nome do funcionário" />
                                    </div>
                                    <div className="mb-3 mx-5">
                                        <label className="col-md-2 "htmlFor="registro">Registro</label>
                                        <input type="text" className="form-control mt-2 col-md-2" id="registro" placeholder="Insira o registro do funcionário" />
                                        <label className="" htmlFor="admin">Admin</label>
                                        <input type="checkbox" className="form-check-input me-1 mt-2 " id="admin" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="senha">Senha</label>
                                        <input type="password" className="form-control mt-2" id="senha" placeholder="Insira a senha do funcionário" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmar-senha">Digite a senha novamente</label>
                                        <input type="password" className="form-control mt-2" id="confirmar-senha" placeholder="Insira a senha do funcionário" />
                                    </div>
                                    <div className="mb-3 d-flex justify-content-end">
                                        <label htmlFor="admin">Admin</label>
                                        <input type="checkbox" className="form-control mt-2 w-25" id="admin" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="ativo">Ativo</label>
                                        <input type="checkbox" className="form-control mt-2" id="ativo" />
                                    </div>
                                    
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary w-md">Cadastrar</button>
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

