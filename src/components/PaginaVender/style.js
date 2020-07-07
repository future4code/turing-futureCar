import styled from 'styled-components'

export const ConteudoInfoVenda = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(199,174,113,1) 0%, rgba(199,174,113,1) 35%, rgba(255,255,255,1) 100%);
    > label {
        margin: 10px;
    }
`
export const BotaoComprar = styled.button`
  margin-right: 20px;
  height: 50px;
  width: 120px;
  border-radius: 20px;
  border: none;
  background-color: #4A6FC7;
  color: white;
  box-shadow: 2px 2px 2px black;
  font-weight: bold;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  position: relative;
  left: 15vw;
  :hover{
      background-color: #525E7A
  }
  :active{
      background-color: #4A6FC7
  }
`
export const HeaderVendas = styled.div `
    display: flex;
    margin: 64px 0px;
    > h1 {
        color: #fff;
        font-size: 3em;
        text-transform: uppercase;
    }
`
export const ConteudoInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
`