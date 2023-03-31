import TabelaCartoesVendidos from '../../components/Tabelas/TabelaCartoesVendidos'
import TabelaUltimasVendas from '../../components/Tabelas/TabelaUltimasVendas'
import TabelaFaturamento from '../../components/Tabelas/TabelaFaturamento'
import TabelaUsuarios from '../../components/Tabelas/TabelaUsuarios'
import './Dashboard.css'

const ultimasVendas = [
    {
        id: 1,
        cartao: 'Sênior 1ª via',
        vendedor: 'Wesley Araújo',
        valor: 'R$0,00'
    },
    {
        id: 2,
        cartao: 'Estudante 2ª via',
        vendedor: 'Luiz Marrano',
        valor: 'R$53,00'
    },
    {
        id: 3,
        cartao: 'VT 1ª via',
        vendedor: 'Tiago Molero',
        valor: 'R$0,00'
    },
    {
        id: 4,
        cartao: 'VT 2ª via',
        vendedor: 'Wesley Araújo',
        valor: 'R$53,00'
    },
    {
        id: 5,
        cartao: 'Comum 2ª via',
        vendedor: 'Wesley Araújo',
        valor: 'R$53,00'
    },
    {
        id: 6,
        cartao: 'Estudante 2ª via',
        vendedor: 'Luiz Marrano',
        valor: 'R$53,00'
    },
    {
        id: 7,
        cartao: 'Estudante 2ª via',
        vendedor: 'Luiz Marrano',
        valor: 'R$53,00'
    }
]

const meses = [
    {
        id: 1,
        mes: 'Janeiro',
        sigla: 'Jan'
    },
    {
        id: 2,
        mes: 'Fevereiro',
        sigla: 'Fev'
    },
    {
        id: 3,
        mes: 'Março',
        sigla: 'Mar'
    },
    {
        id: 4,
        mes: 'Abril',
        sigla: 'Abr'
    },
    {
        id: 5,
        mes: 'Maio',
        sigla: 'Mai'
    },
    {
        id: 6,
        mes: 'Junho',
        sigla: 'Jun'
    },
    {
        id: 7,
        mes: 'Julho',
        sigla: 'Jul'
    },
    {
        id: 8,
        mes: 'Agosto',
        sigla: 'Ago'
    },
    {
        id: 9,
        mes: 'Setembro',
        sigla: 'Set'
    },
    {
        id: 10,
        mes: 'Outubro',
        sigla: 'Out'
    },
    {
        id: 11,
        mes: 'Novembro',
        sigla: 'Nov'
    },
    {
        id: 12,
        mes: 'Dezembro',
        sigla: 'Dez'
    }
]

const usuarios = [
    {
        id: 1,
        nome: 'Wesley Araújo',
        active: true,
        admin: true
    },
    {
        id: 2,
        nome: 'Luiz Marrano',
        active : true,
        admin: true
    },
    {
        id: 3,
        nome: 'Tiago Molero',
        active: true,
        admin: true
    },
    {
        id: 4,
        nome: 'Adrian Souza',
        active: true,
        admin: true
    },
    {
        id: 5,
        nome: 'Roger Guedes',
        active: true,
        admin: false
    },
    {
        id: 6,
        nome: 'Yuri Alberto',
        active: true,
        admin: false
    },
    {
        id: 7,
        nome: 'Cássio Ramos',
        active: true,
        admin: false
    },
    {
        id: 8,
        nome: 'Lucas Piton',
        active: false,
        admin: false
    }
]

const cartoesVendidos = [
    {
        id: 1,
        cartao: 'Comum',
        vendidos: 350
    },
    {
        id: 2,
        cartao: 'Estudante',
        vendidos: 91
    },
    {
        id: 3,
        cartao: 'Sênior',
        vendidos: 260
    },
    {
        id: 4,
        cartao: 'VT',
        vendidos: 177
    }
]

const Dashboard = () => {
    return (
        <div className="container" style={{"backgroundColor": "#FAF9F8"}}>
            <div className="col-12 d-flex justify-content-center pt-5" style={{"color": "#444444"}}>
                <h1>Dashboard</h1>
            </div>
            <div className="main-container d-flex flex-column col-12">
                <div className='d-flex col-12'>
                
                    <TabelaCartoesVendidos cartoesVendidos={cartoesVendidos}/>
                    <TabelaUltimasVendas ultimasVendas={ultimasVendas}/>
                    
                </div>
                <div className='d-flex col-12 '>
                    
                    <TabelaFaturamento meses={meses}/>
                    <TabelaUsuarios usuarios={usuarios}/>
                  
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard
