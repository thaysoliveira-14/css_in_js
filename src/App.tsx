import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Container } from './GlobalStyle'
import { theme } from './GlobalStyle'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
