import React from 'react'
import {ConteudoInfoVenda, BotaoComprar, HeaderVendas, ConteudoInfo} from '../PaginaVender/style'

class PaginaVender extends React.Component {
    render() {
        return (
            <ConteudoInfoVenda>
                <HeaderVendas>
                    <h1>Venda seu carro</h1>
                    <BotaoComprar>Quero comprar</BotaoComprar>
                </HeaderVendas>
                <ConteudoInfo>
                    <h3>Informe os seguintes dados sobre seu carro:</h3>
                    <label>Marca: <input type="text" placeholder="marca do seu carro" /></label>
                    <label>Modelo: <input type="text" placeholder="modelo do seu carro" /></label>
                    <label>Ano: <input type="number" placeholder="ano do seu carro" /></label>
                    <label>Cor: <input type="text" placeholder="cor do seu carro" /></label>
                    <label>Descrição: <input type="text" placeholder="Descrição do seu carro" /></label>
                    <label>Valor: <input type="text" placeholder="marca do seu carro" /></label>
                    <h3>E agora sobre você:</h3>
                    <label>Nome: <input type="text" placeholder="marca do seu carro" /></label>
                    <label>Email: <input type="text" placeholder="modelo do seu carro" /></label>
                    <button>Vender</button>
                </ConteudoInfo>
            </ConteudoInfoVenda>
        )
    }
}

export default PaginaVender
