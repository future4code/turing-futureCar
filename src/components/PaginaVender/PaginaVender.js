import React from 'react'
import {ConteudoInfoVenda, BotaoComprar, HeaderVendas, ConteudoInfo, Vender} from '../PaginaVender/style'
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars"

class PaginaVender extends React.Component {
    state = {
        name: "",
        description: "",
        price: "",
        email: ""
    }

    onChangeCarro = (event) => {
        this.setState({name: event.target.value})
    }
    
    onChangeDescription = (event) => {
    this.setState({description: event.target.value})
    }
    
    onChangePrice = (event) => {
    this.setState({price: event.target.value})
    }

    render() {
        console.log(this.state.name)
        return (
            <ConteudoInfoVenda>
                <HeaderVendas>
                    <h1>Venda seu carro</h1>
                    <BotaoComprar onClick={this.props.mudaComprar}>Quero comprar</BotaoComprar>
                </HeaderVendas>
                <ConteudoInfo>
                    <h3>Informe os seguintes dados sobre seu carro:</h3>
                    <label>Carro: <input type="text" placeholder="marca, modelo e ano" value={this.state.carro} onChange={this.onChangeCarro} /></label>
                    <label>Descrição: <input type="text" placeholder="Cor, estado, opcionais" value={this.state.description} onChange={this.onChangeDescription}  /></label>
                    <label>Valor: <input type="text" placeholder="preço do seu carro" value={this.state.price} onChange={this.onChangePrice}  /></label>
                    <h3>E agora sobre você:</h3>
                    <label>Nome: <input type="text" placeholder="seu nome" /></label>
                    <label>Email: <input type="text" placeholder="seu email" /></label>
                    <Vender>Vender</Vender>
                </ConteudoInfo>
            </ConteudoInfoVenda>
        )
    }
}

export default PaginaVender
