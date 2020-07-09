import styled from 'styled-components'

export const Global = styled.div`
width: 100vw;
height: 100vh;
background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(74,111,199,1) 0%, rgba(74,111,199,1) 35%, rgba(255,255,255,1) 100%);
`
export const Pagina = styled.div`
  text-align: center;
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeaderCompras = styled.div`
    display: flex;
`
export const Titulo = styled.h1`
  font-size: 3em;
  color: white;
  margin-left: 70px;      
`
export const BotaoVender = styled.button`
  height: 50px;
  width: 120px;
  border-radius: 20px;
  border: none;
  background-color: #C7AE71;
  color: white;
  box-shadow: 2px 2px 2px black;
  font-weight: bold;
  font-size: 20px;
  outline: none;
  position: relative;
  left: 15vw;
  cursor: pointer;
  :hover{
      background-color: #C5B58D
  }
  :active{
      background-color: #C7AE71
  }
`
export const FiltrarMinimo = styled.input`
  width: 300px;
  height: 35px;
  display: inline-block;
`
export const FiltrarMaximo = styled.input`
  width: 300px;
  height: 35px;
  display: inline-block;
`
export const Buscar = styled.input`
  width: 300px;
  height: 35px;
  display: inline-block;
`
export const Ordenar = styled.select`
  width: 300px;
  height: 35px;
  display: inline-block;
  margin-left: 10px;
`
export const FiltroEOrdenar = styled.div`
  margin-left: -120px;    
`
export const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 0 20px 0 20px;
  margin: 15px 15px 100px 15px;
  background-color: white;
  box-shadow: 8px 8px 8px #525E7A;  
`
export const BotaoHome = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  background-color: #4A6FC7;
  background-blend-mode: color;
  position: relative;
  left: 15vw;
  cursor: pointer;
`

export const GridCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 50px 100px 100px 100px;
    justify-content: space-between;
`