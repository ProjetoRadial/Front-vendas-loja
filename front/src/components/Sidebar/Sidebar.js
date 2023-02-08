import OnpagLogo from "../../images/logoOnpag.png"
import DashboardLogo from "../../images/dashboard-icon.png"

const items = [
    {
        id: 1,
        name: "Dashboard",
        icon: DashboardLogo,
        link: "/",
    },
    {
        id: 2,
        name: "Vendas",
        icon: DashboardLogo,
        link: "/vendas",
    },
    {
        id: 3,
        name: "Agendamentos",
        icon: DashboardLogo,
        link: "/agendamentos",
    },
    {
        id: 4,
        name: "Produtos",
        icon: DashboardLogo,
        link: "/produtos",
    },
    {
        id: 5,
        name: "Usuários",
        icon: DashboardLogo,
        link: "/usuarios",
    },
];

export const Sidebar = () => {
    return (
        <div className="left-side-menu position-fixed top-0 bottom-0 pb-2 text-center" style={{ "width": "260px", "background-color": "#313a46" }}>
            <div>
                <a href="/" className="d-block mb-3 mb-md-0 me-md-auto link-dark text-decoration-none pt-4">
                    <span className="d-block">
                        <img src={OnpagLogo} style={{ "height": "40px" }} alt="Onpag Logo"></img>
                    </span>
                    <span className="fs-4 text-white p-10"><h6 className="pt-2">Sistema de Gerenciamento</h6></span>
                </a>
            </div>
            <div className="d-flex align-items-start w-100">
                <ul className="nav nav-pills d-flex flex-column mb-auto pt-2 w-100">

                    <li className="d-flex-inline nav-item">
                        <a href="/vendas" className="nav-link pt-3 text-white">
                        <img src={DashboardLogo} className=" d-inline h-100"></img>
                            <h6 className="d-inline">Vendas</h6>
                        </a>
                    </li>
                    <li>
                        <a href="/agendamentos" className="nav-link pt-3 text-white">
                            <i className="bi bi-bag-fill"></i>
                            <img src={DashboardLogo} className=" d-inline h-100"></img>
                            <h6 className="d-inline">Agendamentos</h6>
                        </a>
                    </li>
                    <li>
                        <a href="/produtos" className="nav-link pt-3 text-white">
                        <img src={DashboardLogo} className=" d-inline h-100"></img>
                            <h6 className="d-inline">Produtos</h6>
                        </a>
                    </li>
                    <li>
                        <a href="/usuarios" className="nav-link pt-3 text-white">
                        <img src={DashboardLogo} className=" d-inline h-100"></img>
                            <h6 className="d-inline">Usuários</h6>
                        </a>
                    </li>
                </ul>
                <hr className="dropdown-divider" />
            </div>
        </div>
    )
}

export default Sidebar;