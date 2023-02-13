import Sidebar from "../../components/Sidebar/Sidebar";

const CaixaPage = () => {
    return (
        <section>
            <Sidebar />
            <div className="text-center pt-2" style={{ "paddingLeft": "260px",  }}>
                <h1>Caixa</h1>
                <div className="container d-flex ml-2">
                    <div className="col-8 " style={{ "backgroundColor": "black" }}>
                        {/*List all the products inside the cashier*/}
                        <h1 className="pb-4">Lista de Produtos</h1>
                        <h3>Cartão TOP</h3>

                    </div>
                    <div className="col-4" style={{ "backgroundColor": "red" }}>
                        {/*List all the products inside the cashier*/}
                        <h1>Teste</h1>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default CaixaPage;