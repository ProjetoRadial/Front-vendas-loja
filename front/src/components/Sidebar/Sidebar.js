import React from "react";
import OnpagLogo from "../../images/logoOnpag.png";
import SidebarItem from "./SidebarItem";
import menuIcon from "../../images/menu-icon.png";
import DashboardIcon from "../../images/dashboard-icon.png";
import VendasIcon from "../../images/vendas-icon.png";
import AgendamentosIcon from "../../images/agendamentos-icon.png";
import ProdutosIcon from "../../images/produtos-icon.png";
import UsuariosIcon from "../../images/usuarios-icon.png";

const itemsSidebar = [
    {
        id: 1,
        key: 1,
        name: "Dashboard",
        icon: DashboardIcon,
        link: "/home",
    },
    {
        id: 2,
        key: 2,
        name: "Vendas",
        icon: VendasIcon,
        link: "/vendas",
        collapse: [
            {
                id: 1,
                key: 21,
                name: "Abrir Caixa",
                link: "/caixa",
            },
            {
                id: 2,
                key: 22,
                name: "Consultar vendas",
                link: "/consulta/vendas",
            }
        ]
        
            

    },
    {
        id: 3,
        key: 3,
        name: "Agendamentos",
        icon: AgendamentosIcon,
        link: "/agendamentos",
    },
    {
        id: 4,
        key: 4,
        name: "Produtos",
        icon: ProdutosIcon,
        link: "/produtos",
        collapse: [
            {
                id: 1,
                key: 41,
                name: "Adicionar produto",
                link: "/adicionar-produto",
            },
            {
                id: 2,
                key: 42,
                name: "Editar produtos",
                link: "/editar-produtos",
            },
            {
                id: 3,
                key: 43,
                name: "Estoque",
                link: "/estoque",
            },
        ]

    },
    {
        id: 5,
        key: 5,
        name: "Usuários",
        icon: UsuariosIcon,
        link: "/usuarios",
        collapse: [
            {
                id: 1,
                key: 51,
                name: "Adicionar novo usuário",
                link: "/cadastro/funcionario",
            },
            {
                id: 2,
                key: 52,
                name: "Editar usuários",
                link: "/editar-usuarios",
            },
        ]
    },{
        id: 6,
        key: 6,
        name: "Configurações",
        icon: UsuariosIcon,
        link: "/configuracoes",
    },
];

export const Sidebar = () => {
    return (
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"style={{ "backgroundColor": "transparent", "border": "none" }}><img src={menuIcon} alt="menu-icon" style={{"width":"40px"}}></img></button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel"style={{ "width": "400px", "backgroundColor": "#313a46" }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu Principal</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="left-side-menu position-fixed top-0 bottom-0 pb-2 text-center" style={{ "width": "400px", "backgroundColor": "#313a46" }}>
                        <div>
                            <a href="/home" className="d-block mb-3 mb-md-0 me-md-auto link-dark text-decoration-none pt-4">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;