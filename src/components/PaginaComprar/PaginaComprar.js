import React from 'react'
import {Global, Pagina, Titulo, BotaoVender, HeaderCompras, Filtrar, Ordenar, FiltroEOrdenar, BotaoHome, GridCards} from './styles'
import CardCarro from '../CardsCarros/CardCarro'
import fotoHome from '../output-onlinepngtools.png';
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars"


class PaginaComprar extends React.Component {
    state = {
        listaCarros: []
    }
    
    componentDidMount = () => {
        this.mostraCarros()
    }


    mostraCarros = () => {
        axios.get(baseUrl).then(response => {
            this.setState({listaCarros: response.data.cars})
            console.log(this.state.listaCarros)
            console.log(response)
        }).catch(e => {
            console.log(e.message)  
        })
    }


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
                <GridCards>
                        {this.state.listaCarros.map(car => {
                            return <CardCarro 
                                nameCar = {car.name}
                                description = {car.description}
                                price = {car.price}
                            />
                        })}
                </GridCards>
            </Pagina>
        </Global> 
        )
    }
}

export default PaginaComprar