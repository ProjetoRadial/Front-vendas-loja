

const SidebarItem = (props) => {

    return (
        <div>
            <li className="d-block nav-item text-start">
                <a className="nav-link text-white" aria-current="page" data-toggle="collapse" href="#collapseExample">
                    <img src={props.item.icon} className=" d-inline" style={{"height": "25px"}}></img>
                    <h6 className="d-inline align-self-center m-2">{props.item.name}</h6>
                </a>
            </li>
            <div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
        </div>
        
    )
};

export default SidebarItem;
