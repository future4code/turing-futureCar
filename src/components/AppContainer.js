import React, { Component } from 'react'
import {Pagina, BemVindo, Labe, Car, ImagemLogo, BotaoComprar, BotaoVender, Copyright} from './styles'

export class AppContainer extends Component {
  state = {
    mostraHome: true,
    mostraVender: false,
    mostraComprar: false
  }



  render() {
    return (
      <Pagina>
        <BemVindo>Bem-vindo a</BemVindo>
        <Labe>Labe</Labe><Car>Car</Car>
        <br />
        <ImagemLogo src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT436uf0BuW2tMjhW5Ewv2MeMbsyz04GUEDNw&usqp=CAU'></ImagemLogo>
        <br />
        <BotaoComprar>Quero comprar</BotaoComprar>
        <BotaoVender>Quero vender</BotaoVender>
        <Copyright>©	Copyright	2020	Todos	os	direitos	reservados</Copyright>
      </Pagina>
    )
  }
}
