import styled from 'styled-components'

export const ConteudoInfoVenda = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(2,0,36);
    padding: 100px;
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(199,174,113,1) 0%, rgba(199,174,113,1) 35%, rgba(255,255,255,1) 100%);
    > label {
        margin: 10px;
    }
`
export const BotaoComprar = styled.button`
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
  position: relative;
  left: 19vw;
  :hover{
      background-color: #7388C7
  }
  :active{
      background-color: #4A6FC7;
  }
`
export const HeaderVendas = styled.div `
        display: flex;
        justify-content: center;
        margin-left: 180px;
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
  background-position: center;
  transition: background .8s;
  cursor: pointer;
  text-align: center;
  
  margin-top: 5vh;
  :hover{
    background-color: #7A6E52;
    background: #7A6E52 radial-gradient(circle, transparent 1%, #7A6E52 1%) center/15000%;

  }
  :active{
    background-color: #C7AE71;
    background-size: 100%;
    transition: background 0s;
  }
`
export const BotaoHome = styled.img`
  margin-right: 20px;
  height: 50px;
  width: 50px;
  color: #C7AE71;
  left: 19vw;
  cursor: pointer;
  position: relative;
`