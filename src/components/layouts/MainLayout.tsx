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
    minHeight: '94vh',
    boxShadow: baseTheme.shadows.bookLight,
  }
  const BOOK_TWO_PAGES_WIDTH = `calc(100% - ${baseTheme.space.xxl}px)`
  const BOOK_TWO_PAGES = 'repeat(2, 1fr)'
  const BOOK_ONE_PAGE_WIDTH = `calc((100% - ${baseTheme.space.xxl}px) / 2)`
  const BOOK_ONE_PAGE = `repeat(1, 1fr)`

  return isIndexPage
    ? {
        ...baseProps,
        maxWidth: isDesktop ? BOOK_ONE_PAGE_WIDTH : BOOK_TWO_PAGES_WIDTH,
        gridTemplateColumns: BOOK_ONE_PAGE,
      }
    : {
        ...baseProps,
        maxWidth: BOOK_TWO_PAGES_WIDTH,
        gridTemplateColumns: isDesktop ? BOOK_TWO_PAGES : BOOK_ONE_PAGE,
      }
}

export const MainLayout: React.FC<Layout> = ({ children, userAgentString }) => {
  const router = useRouter()
  const isIndexPage = router.route === '/'
  const userAgent = useUserAgent(userAgentString || window.navigator.userAgent)
  const isDesktop = isDeviceDesktop(userAgent)

  return (
    <Box bg="darkest" sx={{ maxHeight: 'fit-content', minHeight: '100vh' }}>
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
