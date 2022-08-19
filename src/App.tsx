import React from 'react'
import { ThemeProvider } from 'styled-components'
import { light } from './styles/themes/light'
import GlobalStyle from './styles/global'
import Home from './screens/home'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
