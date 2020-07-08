import React from 'react'
import {Card, FotoCarro, Titulo, Descricao, Preco, BotaoComprar, Prazo, GridCards} from './styles'

class CardCarro extends React.Component {
    render() {
        return (
        <div>
            <Card>
                <FotoCarro src="http://lorempixel.com/280/185/transport"></FotoCarro>
                <Titulo> {this.props.nameCar}</Titulo>
                <hr />
                <Descricao>{this.props.description}</Descricao>
                <Preco>{this.props.price}</Preco>
                <BotaoComprar>Comprar</BotaoComprar>
                <Prazo>Prazo de entrega: 1 semana</Prazo>
            </Card>
        </div>     
        )
    }
}

export default CardCarro