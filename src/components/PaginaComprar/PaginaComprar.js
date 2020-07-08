import React from 'react'
import {Global, Pagina, Titulo, BotaoVender, HeaderCompras, Filtrar, Ordenar, FiltroEOrdenar, Card, GridCards} from './styles'

class PaginaComprar extends React.Component {
    render() {
        return (
        <Global>
            <Pagina>
                <HeaderCompras>
                    <Titulo>ENCONTRE SEU CARRO NOVO</Titulo>
                    <BotaoVender onClick={this.props.mudaVender} >Quero vender</BotaoVender>
                </HeaderCompras>
                <FiltroEOrdenar>
                    <Filtrar placeholder="Filtrar por:" />
                    <Ordenar placeholder="Ordenar por:" />
                </FiltroEOrdenar>
                <GridCards>
                    <Card>Card Carro 1</Card>
                    <Card>Card Carro 2</Card>
                    <Card>Card Carro 3</Card>
                    <Card>Card Carro 4</Card>
                </GridCards>
            </Pagina>
        </Global> 
        )
    }
}

export default PaginaComprar