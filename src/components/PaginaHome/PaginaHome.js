import React from 'react'
import styled from 'styled-components'
import {Pagina, BemVindo, Labe, Car, ImagemLogo, BotaoComprar, BotaoVender, Copyright, LabeCar, ContainerButtons} from './styles'

class PaginaHome extends React.Component {
    render() {
        return (
            
    <Pagina>
      <BemVindo>Bem-vindo à</BemVindo>
      <LabeCar>
        <Labe>Labe</Labe><Car>Car</Car>
      </LabeCar>
      <ImagemLogo src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT436uf0BuW2tMjhW5Ewv2MeMbsyz04GUEDNw&usqp=CAU'></ImagemLogo>
      <ContainerButtons>
        <BotaoComprar onClick={this.props.mudaComprar}>Quero comprar</BotaoComprar>
        <BotaoVender onClick={this.props.mudaVender}>Quero vender</BotaoVender>
      </ContainerButtons>
      <Copyright>©	Copyright	2020	Todos	os	direitos	reservados</Copyright>
    </Pagina>
        )
    }
}

export default PaginaHome
