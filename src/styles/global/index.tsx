import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  
    
  }
  :root{
    font-size: 16px;
  }
  html{
    scroll-behavior: smooth;
  }
  body{
    font-family: 'Roboto',sans-serif;
    font-size: ${({ theme }) => theme.fontSize.text};
    background-color:  ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
    transition: background-color 0.4s linear;
  }
  body::-webkit-scrollbar {
    width: 5px;
  }
  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 1.25rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img{
    user-select: none;
  }
  
`

export default GlobalStyle
