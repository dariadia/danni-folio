import React from 'react'
import { useRouter } from 'next/dist/client/router'

import { Grid, Box, baseTheme } from 'danni-s-design-system'
import { Header, Footer } from '.'

import { Layout } from 'types'

const getGridSx = (isIndexPage: boolean) => {
  const baseProps = {
    maxHeight: `calc((100% - ${baseTheme.space.xxl}px))`,
    minHeight: '100vh',
    boxShadow: baseTheme.shadows.bookLight,
  }
  return isIndexPage
    ? {
        ...baseProps,
        maxWidth: `calc((100% - ${baseTheme.space.xxl}px) / 2)`,
        gridTemplateColumns: `repeat(1, 1fr)`,
      }
    : {
        ...baseProps,
        maxWidth: `calc(100% - ${baseTheme.space.xxl}px)`,
        gridTemplateColumns: `repeat(2, 1fr)`,
      }
}

export const MainLayout: React.FC<Layout> = ({ children }) => {
  const router = useRouter()
  const isIndexPage = router.route === '/'

  return (
    <Box bg="darkest">
      <Header />
      <Grid m="auto" p="l" bg="white" sx={getGridSx(isIndexPage)}>
        {children}
      </Grid>
      <Footer />
    </Box>
  )
}
