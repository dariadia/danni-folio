import React from 'react'
import { AppProps } from 'next/app'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { mainTheme as theme } from 'danni-s-design-system'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
