import React from 'react'
import {Global, Pagina, Titulo, BotaoVender, HeaderCompras, FiltrarMinimo, FiltrarMaximo, Buscar, Ordenar, FiltroEOrdenar, BotaoHome, GridCards} from './styles'
import CardCarro from '../CardsCarros/CardCarro'
import fotoHome from '../output-onlinepngtools.png';
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars"


class PaginaComprar extends React.Component {
    state = {
        listaCarros: [],
        valorMinimo: "",
        valorMaximo: "",
        buscar: "",
        inputOrdenar: "Crescente"
    }

    onChangeMinimo = (event) => {
      this.setState({ valorMinimo: event.target.value })
    }
  
    onChangeMaximo = (event) => {
      this.setState({ valorMaximo: event.target.value })
    }
  
    funcaoBuscar = (event) => {
      this.setState({ buscar: event.target.value })
    }

    onChangeOrdenar = (event) => {
        this.setState({inputOrdenar: event.target.value})
        switch (this.state.inputOrdenar) {
          case 'Crescente':
            this.state.listaCarros.map((carro) => {
                return this.setState({listaCarros: carro.price.sort(function(a, b) {
                    return b.price - a.price
                  })})
            })
            
          case 'Decrescente':
            this.state.listaCarros.map((carro) => {
                return this.setState({listaCarros: carro.price.sort(function(a, b) {
                    return a.price - b.price
                  })})
            })
          default:
            return true
        }
    }
    
    componentDidMount = () => {
        this.mostraCarros()
    }


    mostraCarros = () => {
        axios.get(baseUrl).then(response => {
            this.setState({listaCarros: response.data.cars})
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
                    <FiltrarMinimo type="text" value={this.state.valorMinimo} placeholder="Valor minimo:" onChange={this.onChangeMinimo}/>
                    <FiltrarMaximo type="text" value={this.state.valorMaximo} placeholder="Valor maximo:"  onChange={this.onChangeMaximo}/>
                    <Buscar type="text" value={this.state.buscar} placeholder="Buscar produto"  onChange={this.funcaoBuscar}/>
                    <Ordenar value={this.state.inputOrdenar} onChange={this.onChangeOrdenar}>
                        <option>Ordenar: Titulo</option>
                        <option value="Decrescente">Ordenar: Preco decrescente</option>
                        <option value="Crescente">Ordenar: Preco crescente</option>
                    </Ordenar>
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