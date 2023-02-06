import OnpagLogo from "../../images/logoOnpag.png"

export const LoginForm = () => {
    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-content-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{ "border-radius": "1rem" }}>
                        <div className="card-body p-5 text-center">
                            <div className="mt-md-4 pb-3">
                                <img src={OnpagLogo} style={{ "height": "40px" }} alt="Onpag Logo"></img>
                                <h2 className="pt-1">Bem vindo</h2>
                                <p className="text-white-50 mb-4">Insira seu usuário e senha</p>
                                <div className="form-outline form-white mb-3">
                                    <input type="user" id="" className="form-control form-control-lg" />
                                    <label className="form-label mt-2" for="">Usuário</label>
                                </div>
                                <div className="form-outline form-white mb-4">
                                    <input type="password" id="" className="form-control form-control-lg" />
                                    <label className="form-label mt-2" for="">Senha</label>
                                </div>
                                <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

