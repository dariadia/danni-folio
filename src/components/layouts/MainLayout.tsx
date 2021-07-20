import React from 'react'
import { Grid } from 'danni-s-design-system'
import { Header } from './Header'

import { Layout } from 'types'

export const MainLayout: React.FC<Layout> = ({ children, theme }) => {
  if (!theme) return null
  return (
    <>
      <Header />
      <Grid
        p="l"
        sx={{
          maxWidth: `calc(100% - ${theme.space.l})`,
          maxHeight: `calc(100% - ${theme.space.xxl})`,
        }}
      >
        {children}
      </Grid>
      {/* <Footer /> */}
    </>
  )
}
