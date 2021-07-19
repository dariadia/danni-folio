import React from 'react'
import { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next'

import { ThemeProvider } from 'styled-components'
import { mainTheme as theme } from 'danni-s-design-system'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
