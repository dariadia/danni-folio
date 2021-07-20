import React, { ComponentType } from 'react'
import { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next'

import { ThemeProvider } from 'styled-components'
import { mainTheme as theme } from 'danni-s-design-system'

type ApplicationProps = AppProps & {
  Component: AppProps['Component'] & { Layout?: React.FC }
}

const App: React.FC<ApplicationProps> = ({ Component, pageProps }) => {
  const Layout: ComponentType = Component.Layout || React.Fragment

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout {...{ theme, ...pageProps }}>
          <Component {...{ theme, ...pageProps }} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
