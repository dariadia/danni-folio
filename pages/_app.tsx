import React, { ComponentType } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

import { mainTheme as theme } from 'danni-s-design-system'
import { Layout as LayoutType } from 'types'

const GlobalStyle = createGlobalStyle`
 ${normalize}

 * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-family: Karla;
    -webkit-font-smoothing: antialiased;
  }
`

type ApplicationProps = AppProps & {
  Component: AppProps['Component'] & { Layout?: React.FC<LayoutType> }
}

const App: React.FC<ApplicationProps> = ({ Component, pageProps }) => {
  const Layout: ComponentType = Component.Layout || React.Fragment

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <GlobalStyle />
    </>
  )
}

export default appWithTranslation(App)
