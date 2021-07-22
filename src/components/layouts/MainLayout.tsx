import React from 'react'
import { useRouter } from 'next/dist/client/router'

import { Grid, ThemeType, Box } from 'danni-s-design-system'
import { Header, Footer } from '.'

import { Layout } from 'types'

const getGridSx = ({
  theme,
  isIndexPage,
}: {
  theme: ThemeType
  isIndexPage: boolean
}) => {
  const baseProps = {
    maxHeight: `calc((100% - ${theme.space.xxl}px))`,
    minHeight: '100vh',
    boxShadow: theme.shadows.book,
  }
  return isIndexPage
    ? {
        ...baseProps,
        maxWidth: `calc((100% - ${theme.space.xxl}px) / 2)`,
        gridTemplateColumns: `repeat(1, 1fr)`,
      }
    : {
        ...baseProps,
        maxWidth: `calc(100% - ${theme.space.xxl}px)`,
        gridTemplateColumns: `repeat(2, 1fr)`,
      }
}

export const MainLayout: React.FC<Layout> = ({ children, theme }) => {
  const router = useRouter()
  const isIndexPage = router.route === '/'

  if (!theme) return null

  return (
    <Box bg="accentDark">
      <Header />
      <Grid m="auto" p="l" sx={getGridSx({ theme, isIndexPage })}>
        {children}
      </Grid>
      <Footer />
    </Box>
  )
}
