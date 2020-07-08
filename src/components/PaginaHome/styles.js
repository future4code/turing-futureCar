import styled from 'styled-components'

export const Global = styled.div`
width: 100vw;
height: 100vh;
background-image: url("https://i.postimg.cc/NQfhbfXD/Untitled.jpg");
`
export const Pagina = styled.div`
  text-align: center;
  margin: 0px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const BemVindo = styled.h1`
  margin-bottom: 0px;
  font-size: 45px;
`
export const LabeCar = styled.div`
  display: flex;
  margin-top: 36px;
`
export const Labe = styled.span`
  margin-top: -30px;
  font-size: 96px;
  font-weight: bold;
  color: white;
`
export const Car = styled.span`
  margin-top: -30px;
  font-size: 96px;
  font-weight: bold;
  color: #C7AE71;
`
export const ImagemLogo = styled.img`
  margin-top: 20px;
`
export const ContainerButtons = styled.div`
  display: flex;
`

export const BotaoComprar = styled.button`
  margin-right: 20px;
  height: 50px;
  width: 200px;
  border-radius: 20px;
  border: none;
  background-color: #4A6FC7;
  color: white;
  box-shadow: 2px 2px 2px black;
  font-weight: bold;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  :hover{
      background-color: #7388C7
  }
  :active{
      background-color: #4A6FC7
  }
`
export const BotaoVender = styled.button`
  margin-left: 20px;
  height: 50px;
  width: 200px;
  border-radius: 20px;
  border: none;
  background-color: #C7AE71;
  color: white;
  box-shadow: 2px 2px 2px black;
  font-weight: bold;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  :hover{
    background-color: #C5B58D
  }
  :active{
    background-color: #C7AE71
  }
`
export const Copyright = styled.p`
  bottom: 0;
  position: absolute;
  margin: 0 0 20px 20px;
  font-size: 16px;
`