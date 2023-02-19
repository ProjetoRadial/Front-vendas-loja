import React from "react";

export default class Exemplo extends React.Component {  // declarando a classe herdando o metodo Component de React.
    constructor(props){                                 // declarando o construtor que é obrigatório quando usamos classe (por enquanto).
        super(props);                                   // Metodo super() permite herdar do construtor que por sua vez já herdou do component
        this.funcao = this.funcao.bind(this);           // Fazendo um bind() para que a função receba o mesmo this do construtor 
        this.state = {                                  // variavel de estado onde podemos guardar o estado
            chave: ""                                   // conjunto de chave e valor da variavel de estado
        };
    };
    async funcao(){};                                   // função assincrona, podemos colocar qualquer codigo javascript nela 

    this.setState({chave: "valor"});                    // Exemplo de como setar um valor para uma chave mandando um objeto direto
    this.setState((prevState)=>{
        return {chave: prevState.chave + "valor"}
    })

    render(){                                           // metodo render() utilizado para retornar as tags JSX
                                                        // dentro do render podemos trabalhar a informação
        return();                                       // dentro de return() montaremos as tags JSX e retornar para onde a classe foi chamada
    };
}