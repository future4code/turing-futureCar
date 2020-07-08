import React from 'react'
import {Card, FotoCarro, Titulo, Descricao, Preco, BotaoComprar, Prazo, GridCards} from './styles'

class CardCarro extends React.Component {
    render() {
        return (
        <GridCards>
            <Card>
                <FotoCarro src="https://statig1.akamaized.net/bancodeimagens/c6/ul/nw/c6ulnwaty09zy0msq78fe3408.jpg"></FotoCarro>
                <Titulo>Ford Escort 1989</Titulo>
                <hr />
                <Descricao>Bem cuidado - Branco</Descricao>
                <Preco>R$25.000</Preco>
                <BotaoComprar>Comprar</BotaoComprar>
                <Prazo>Prazo de entrega: 1 semana</Prazo>
            </Card>
            <Card>
                <FotoCarro src="https://i0.wp.com/blog.carlider.com.br/wp-content/uploads/2016/12/kadet.jpg?fit=670%2C450"></FotoCarro>
                <Titulo>Chevrolet Kadett 1994</Titulo>
                <hr />
                <Descricao>LoKoD++++</Descricao>
                <Preco>R$19.000</Preco>
                <BotaoComprar>Comprar</BotaoComprar>
                <Prazo>Prazo de entrega: Imediato</Prazo>
            </Card>
            <Card>
                <FotoCarro src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202005/20200528/jaguar-fpace-2.0-16v-turbo-diesel-prestige-awd-4p-automatico-wmimagem16275497979.jpg?s=fill&w=552&h=414&q=60"></FotoCarro>
                <Titulo>Jaguar F-Pace 2018</Titulo>
                <hr />
                <Descricao>2.0 Turbo Diesel</Descricao>
                <Preco>R$256.000</Preco>
                <BotaoComprar>Comprar</BotaoComprar>
                <Prazo>Prazo de entrega: 3 meses</Prazo>
            </Card>
        </GridCards>     
        )
    }
}

export default CardCarro