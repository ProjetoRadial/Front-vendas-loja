import { LoginComponent } from "../../components/LoginComponent/LoginComponent"
import OnpagLogo from "../../images/logoOnpag.png"
//import {LoginComponent} from "../../components/LoginComponent/LoginComponent.js"
//import { redirect } from "react-router-dom";

export const LoginPage = () => {
    return (
        <section className="vh-100" style={{ "background": "linear-gradient(to right, rgba(44, 13, 70, 1), rgba(141, 16, 131, 1))" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-content-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ "borderRadius": "2rem" }}>
                            <div className="card-body p-5 text-center">
                                <div className="mt-md-4 pb-3">
                                    <img src={OnpagLogo} style={{ "height": "40px" }} alt="Onpag Logo"></img>
                                    <h2 className="pt-1">Bem vindo</h2>
                                    <p className="text-white-50 mb-4">Insira seu usuário e senha</p>
                                    <form>
                                        <div className="form-outline form-white mb-3">
                                            <input type="user" id="username" className="form-control form-control-lg" />
                                            <label className="form-label mt-2" htmlFor="username">Usuário</label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="password" className="form-control form-control-lg" />
                                            <label className="form-label mt-2" htmlFor="password">Senha</label>
                                        </div>
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={(event)=>{
                                            event.preventDefault();
                                            LoginComponent(event.target.form[0].value, event.target.form[1].value)
                                                .then((dados)=>{
                                                    console.log(dados);
                                                })
                                            
                                        }}>Entrar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

