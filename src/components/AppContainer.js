import React, { Component } from 'react'
import PaginaComprar from './PaginaComprar/PaginaComprar'
import PaginaVender from './PaginaVender/PaginaVender'
import PaginaHome from './PaginaHome/PaginaHome'

export class AppContainer extends Component {
  state = {
    home: true,
    vender: false,
    comprar: false
  }

  mudaEstadoVender = () => {
    this.setState({home: false, vender: true, comprar: false})
  }

  mudaEstadoComprar = () => {
    this.setState({home: false, vender: false, comprar: true})
  }

  render() {
    const renderizaTela = () => {
      if (this.state.vender === true) {
        return <PaginaVender />
      } else if (this.state.comprar === true) {
        return <PaginaComprar />
      } else return <PaginaHome mudaComprar={this.mudaEstadoComprar} mudaVender={this.mudaEstadoVender}/>
    }

    return (
      <div>{renderizaTela()}</div>
    )
  }
}