import React from 'react'
import { useRouter } from 'next/dist/client/router'

import { useUserAgent } from 'next-useragent'
import { isDeviceDesktop } from 'utils/device'

import { Grid, Box, baseTheme } from 'danni-s-design-system'
import { Header, Footer } from '.'

import { Layout } from 'types'

const getGridSx = ({
  isDesktop,
  isIndexPage,
}: {
  isDesktop: boolean
  isIndexPage: boolean
}) => {
  const baseProps = {
    maxHeight: `calc((100% - ${baseTheme.space.xxl}px))`,
    minHeight: '100vh',
    boxShadow: baseTheme.shadows.bookLight,
  }
  const BOOK_TWO_PAGES_WIDTH = `calc(100% - ${baseTheme.space.xxl}px)`
  const BOOK_ONE_PAGE_WIDTH = `calc((100% - ${baseTheme.space.xxl}px) / 2)`

  return isIndexPage
    ? {
        ...baseProps,
        maxWidth: isDesktop ? BOOK_ONE_PAGE_WIDTH : BOOK_TWO_PAGES_WIDTH,
        gridTemplateColumns: `repeat(1, 1fr)`,
      }
    : {
        ...baseProps,
        maxWidth: BOOK_TWO_PAGES_WIDTH,
        gridTemplateColumns: `repeat(2, 1fr)`,
      }
}

export const MainLayout: React.FC<Layout> = ({ children, userAgentString }) => {
  const router = useRouter()
  const isIndexPage = router.route === '/'
  const userAgent = useUserAgent(userAgentString || window.navigator.userAgent)
  const isDesktop = isDeviceDesktop(userAgent)

  return (
    <Box bg="darkest">
      <Header />
      <Grid
        m="auto"
        p="l"
        bg="white"
        sx={getGridSx({ isIndexPage, isDesktop })}
      >
        {children}
      </Grid>
      <Footer />
    </Box>
  )
}
