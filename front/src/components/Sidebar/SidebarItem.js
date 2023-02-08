const SidebarItem = () => {



    const { t } = useTranslation();
    return (
        <div>
        <li className="d-block nav-item text-start">
        <a href="/" className="nav-link text-white" aria-current="page">
            <img src={DashboardLogo} className=" d-inline h-100"></img>
            <h6 className="d-inline">Dashboard</h6>
        </a>
    </li>
    </div>
    )
    };
