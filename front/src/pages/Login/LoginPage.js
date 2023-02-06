import { LoginForm } from "../../components/LoginForm/LoginForm.js"



export const LoginPage = () => {
    return (
        <section className="vh-100" style={{"background": "linear-gradient(to right, rgba(44, 13, 70, 1), rgba(141, 16, 131, 1))"}}>
        <LoginForm/>
        <div style ={{"background-color": "#fff"}} className="col-lg-4 col-md-6 col-sm-6 col-xs-12"></div>
        </section>
    )
}

