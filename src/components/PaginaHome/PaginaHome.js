import React from 'react'
import {Pagina, BemVindo, Labe, Car, ImagemLogo, BotaoComprar, BotaoVender, Copyright, LabeCar, ContainerButtons, Global} from './styles'
import fotoLogo from '../output-onlinepngtools2.png'

class PaginaHome extends React.Component {
    render() {
        return (
          <Global>   
            <Pagina>
              <BemVindo>Bem-vindo à</BemVindo>
              <LabeCar>
                <Labe>Labe</Labe><Car>Car</Car>
              </LabeCar>
              <ImagemLogo src={fotoLogo}></ImagemLogo>
              <ContainerButtons>
                <BotaoComprar onClick={this.props.mudaComprar}>Quero comprar</BotaoComprar>
                <BotaoVender onClick={this.props.mudaVender}>Quero vender</BotaoVender>
              </ContainerButtons>
              <Copyright>©	Copyright	2020	Todos	os	direitos	reservados</Copyright>
            </Pagina>
          </Global>           
        )
    }
}

export default PaginaHome
