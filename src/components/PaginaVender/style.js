import styled from 'styled-components'

export const ConteudoInfoVenda = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(2,0,36);
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
  left: 36vw;
  top: -12vh;
  :hover{
      background-color: #7388C7
  }
  :active{
      background-color: #4A6FC7
  }
`
export const HeaderVendas = styled.div `
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
    align-items: center;
    margin-bottom: 8px;
        > label {
            font-size: 1.2em;
            font-weight: 500;
            margin: 4px 64px;
            
        > input {
            padding: 4px;
            border: 2px solid black;
        }
        }
`

export const Vender = styled.button`
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
  text-align: center;
  margin-top: 5vh;
  :hover{
    background-color: #7A6E52
  }
  :active{
    background-color: #C7AE71
  }
`