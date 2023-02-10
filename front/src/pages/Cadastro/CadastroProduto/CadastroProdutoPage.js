import Sidebar from "../../../components/Sidebar/Sidebar"

//cadastrar produto com registro e nome 
export const CadastroProdutoPage = () => {
    return (

        <section className="vh-100">

            <Sidebar />
            <div className="container h-100" style={{ "paddingLeft": "260px" }}>
                <div className="row d-flex h-100">
                    <div className="d-flex justify-content-center">
                        <h1 className='pt-4'>Cadastro de Produto</h1>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="p-4">
                                <div className=" text-center">
                                    <h4 className="text-dark-50 mt-0 font-weight-bold">Preencha os campos abaixo</h4>
                                    <p className="text-muted mb-4">Cadastre um produto</p>
                                </div>
                                <form className='p-2'>
                                    <div className="mb-3 mx-5">
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" className="form-control mt-2" id="nome" placeholder="Insira o nome do produto" />
                                    </div>
                                    <div className="d-flex align-content-center">
                                        <div className="col-md-8 mb-3 mx-5 justify-content-end ">
                                            <label className="col-md-2 " htmlFor="registro">Registro</label>
                                            <input type="text" className="form-control mt-2 col-md-2" id="registro" placeholder="Insira o registro do produto" />
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

