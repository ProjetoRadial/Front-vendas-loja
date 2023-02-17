import React from "react";

const SidebarItem = (props) => {

    const collapsedItems = props.item.collapse // pega o array de itens colapsados
    const checkCollapse = collapsedItems ? true : false // checa se o item tem um array de itens colapsados

    let collapseLink = "" // variável que vai receber o link
    let collapseLinkHref = "" // variável que vai receber o link para o href

    if (!checkCollapse) {
        collapseLink = props.item.link // se não tiver uma lista colapsada, o link vai ser o link do item Ex: (Agendamentos redireciona para /agendamentos)
        collapseLinkHref = props.item.link // se não tiver uma lista colapsada, o link vai ser o link do item
    } else {
        collapsedItems.map(() => {
            collapseLink = "collapse-" + props.item.id // se tiver uma lista colapsada, o link vai ser "collapse-"" + id do item Ex: (Vendas redireciona para #collapse-2)
            collapseLinkHref = "#" + collapseLink // adiciona o # para o href entender que é um link interno
        })
    }


    return (
        <div>
            <li className="d-block nav-item text-start">
                <a className="nav-link text-white" data-bs-toggle="collapse" href={`${collapseLinkHref}`} aria-expanded="false" role="button" aria-controls={collapseLink}>
                    <img src={props.item.icon} className=" d-inline" style={{ "height": "25px" }} alt={`icone ${props.item.name}`}></img>
                    <h6 className="d-inline align-self-center m-2">{props.item.name}</h6>
                </a>
                <ul className="collapse" id={collapseLink}>
                    {/* se o item tiver um array de itens colapsados, ele vai mapear o array e retornar os itens */}
                    {checkCollapse && collapsedItems.map((collapsedItem) => {
                        return (
                        <li className="w-100" key={collapsedItem.key}>
                            <a href={collapsedItem.link} className="nav-link text-white">
                                <h6 className="d-inline align-self-center m-2">{collapsedItem.name}</h6>
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </li>
        </div>
    )
};

export default SidebarItem;
