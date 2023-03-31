

const TabelaUsuarios = ({usuarios}) => {

    return (
        <div className='col-4 p-3'>
            <div className='' style={{"backgroundColor": "#fff", "box-shadow": "0.5px 0.5px 2px rgba(0, 0, 0, 0.25"}}>
                <div className="box-title d-flex align-items-center col-12 justify-content-between border-bottom">
                    <div className='d-flex align-items-center p-1'>
                        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 11.75C12.3333 11.75 10.9583 11.2 9.875 10.1C8.79167 9 8.25 7.61666 8.25 5.95C8.25 4.28333 8.79167 2.90833 9.875 1.825C10.9583 0.741664 12.3333 0.199997 14 0.199997C15.6667 0.199997 17.0417 0.741664 18.125 1.825C19.2083 2.90833 19.75 4.28333 19.75 5.95C19.75 7.61666 19.2083 9 18.125 10.1C17.0417 11.2 15.6667 11.75 14 11.75ZM0 26.25V23.35C0 22.45 0.25 21.6583 0.75 20.975C1.25 20.2917 1.91667 19.75 2.75 19.35C4.71667 18.4833 6.63333 17.825 8.5 17.375C10.3667 16.925 12.2 16.7 14 16.7C15.8 16.7 17.6333 16.925 19.5 17.375C21.3667 17.825 23.2667 18.4833 25.2 19.35C26.0667 19.75 26.75 20.2917 27.25 20.975C27.75 21.6583 28 22.45 28 23.35V26.25H0ZM1.55 24.7H26.45V23.35C26.45 22.85 26.2833 22.3583 25.95 21.875C25.6167 21.3917 25.15 21 24.55 20.7C22.75 19.8333 20.9917 19.2083 19.275 18.825C17.5583 18.4417 15.8 18.25 14 18.25C12.2 18.25 10.4333 18.4417 8.7 18.825C6.96667 19.2083 5.21667 19.8333 3.45 20.7C2.85 21 2.38333 21.3917 2.05 21.875C1.71667 22.3583 1.55 22.85 1.55 23.35V24.7ZM14 10.2C15.2 10.2 16.2083 9.8 17.025 9C17.8417 8.2 18.25 7.2 18.25 6C18.25 4.8 17.8417 3.79166 17.025 2.975C16.2083 2.15833 15.2 1.75 14 1.75C12.8 1.75 11.7917 2.15833 10.975 2.975C10.1583 3.79166 9.75 4.8 9.75 6C9.75 7.2 10.1583 8.2 10.975 9C11.7917 9.8 12.8 10.2 14 10.2Z" fill="#CC00FF"/>
                        </svg>
                        <h3 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>Usuários ativos</h3>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-between align-items-center col-12 border-top'>
                    <div className='d-flex justify-content-between align-items-center col-12 border-bottom p-2'>
                        <h5 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>Nome</h5>
                        <h5 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>Admin</h5>
                    </div>
                    {usuarios.map((usuario) => ( 
                        usuario.active && usuario.admin ? (
                            <div className='d-flex justify-content-between align-items-center col-12 border-top p-2'>
                                <h5 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>{usuario.nome}</h5>
                                <h5 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>SIM</h5>
                            </div>
                        ) : usuario.active && !usuario.admin ? (
                            <div className='d-flex justify-content-between align-items-center col-12 border-top p-2'>
                                <h5 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>{usuario.nome}</h5>
                                <h5 className='px-2' style={{"fontWeight": "200", "color": "#444444"}}>NÃO</h5>
                            </div>
                        ) : null                                               
                    ))}     
                </div>       
            </div>
        </div>                       
    )

}

export default TabelaUsuarios

