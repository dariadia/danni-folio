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
        m="auto"
        p="l"
        sx={{
          maxWidth: `calc(100% - ${theme.space.xxl}px)`,
          maxHeight: `calc(100% - ${theme.space.xxl}px)`,
          minHeight: '90vh',
          boxShadow: theme.shadows.book,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        {children}
      </Grid>
      {/* <Footer /> */}
    </>
  )
}
