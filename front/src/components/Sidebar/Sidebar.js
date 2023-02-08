import OnpagLogo from "../../images/logoOnpag.png"
import SidebarItem from "./SidebarItem"
import DashboardIcon from "../../images/dashboard-icon.png"
import VendasIcon from "../../images/vendas-icon.png"
import AgendamentosIcon from "../../images/agendamentos-icon.png"
import ProdutosIcon from "../../images/produtos-icon.png"
import UsuariosIcon from "../../images/usuarios-icon.png"

const itemsSidebar = [
    {
        id: 1,
        name: "Dashboard",
        icon: DashboardIcon,
        link: "/",
    },
    {
        id: 2,
        name: "Vendas",
        icon: VendasIcon,
        link: "/vendas",
    },
    {
        id: 3,
        name: "Agendamentos",
        icon: AgendamentosIcon,
        link: "/agendamentos",
    },
    {
        id: 4,
        name: "Produtos",
        icon: ProdutosIcon,
        link: "/produtos",
    },
    {
        id: 5,
        name: "Usuários",
        icon: UsuariosIcon,
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
                    {itemsSidebar.map((item) => (
                        <SidebarItem key={item.id} item={item} />
                    ))}
                </ul>
                <hr className="dropdown-divider" />
            </div>
        </div>
    )
}

export default Sidebar;