import React from 'react'
import axios from 'axios'
import {ConteudoInfoVenda, BotaoComprar, HeaderVendas, ConteudoInfo, Vender, BotaoHome} from '../PaginaVender/style'
import fotoHome from '../output-onlinepngtools.png'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars"

class PaginaVender extends React.Component {
    state = {
        name: "",
        description: "",
        price: "",
        paymentMethod: Date.now(),
        shipping: Date.now()
    }

    createCars = () => {
        const body = {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        paymentMethod: this.state.paymentMethod,
        shipping: this.state.shipping
        }

        axios.post(baseUrl, body).then(() => {
        this.setState({name: "", description: "", price: "", paymentMethod: "", shipping: ""})
        alert(`Seu anuncio foi postado com sucesso!`)
        
        }).catch(error => {
        alert(`Seu anuncio nao foi postado, confira os campos e tente novamente`)
        })
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
        console.log(this.state)
        return (
            <ConteudoInfoVenda>
                <HeaderVendas>
                    <h1>Venda seu carro</h1>
                    <BotaoHome onClick={this.props.mudaHome} src={fotoHome}></BotaoHome>
                    <BotaoComprar onClick={this.props.mudaComprar}>Quero comprar</BotaoComprar>
                </HeaderVendas>
                <ConteudoInfo>
                    <h3>Informe os seguintes dados sobre seu carro:</h3>
                    <label>Carro: <input type="text" placeholder="Marca, modelo e ano" value={this.state.carro} onChange={this.onChangeCarro} /></label>
                    <label>Descrição: <input type="text" placeholder="Cor, estado, opcionais" value={this.state.description} onChange={this.onChangeDescription}  /></label>
                    <label>Valor: <input type="text" placeholder="Preço do carro" value={this.state.price} onChange={this.onChangePrice}  /></label>
                    <h3>E agora sobre você:</h3>
                    <label>Nome: <input type="text" placeholder="Seu nome" /></label>
                    <label>Email: <input type="text" placeholder="Seu email" /></label>
                    <Vender onClick={() => this.createCars()}>Vender</Vender>
                </ConteudoInfo>
            </ConteudoInfoVenda>
        )
    }
}

export default PaginaVender
