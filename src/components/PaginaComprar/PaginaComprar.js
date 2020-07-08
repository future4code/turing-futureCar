import React from 'react'
import {Global, Pagina, Titulo, BotaoVender, HeaderCompras, Filtrar, Ordenar, FiltroEOrdenar, BotaoHome} from './styles'
import CardCarro from '../CardsCarros/CardCarro'
import fotoHome from '../output-onlinepngtools.png'

class PaginaComprar extends React.Component {
    render() {
        return (
        <Global>
            <Pagina>
                <HeaderCompras>
                    <Titulo>ENCONTRE SEU CARRO NOVO</Titulo>
                    <BotaoHome onClick={this.props.mudaHome} src={fotoHome}></BotaoHome>
                    <BotaoVender onClick={this.props.mudaVender}>Quero vender</BotaoVender>
                </HeaderCompras>
                <FiltroEOrdenar>
                    <Filtrar placeholder="Filtrar por:" />
                    <Ordenar placeholder="Ordenar por:" />
                </FiltroEOrdenar>
                <div>
                    <CardCarro />
                </div>
            </Pagina>
        </Global> 
        )
    }
}

export default PaginaComprar