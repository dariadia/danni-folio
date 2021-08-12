import React, { useState, useEffect } from 'react'

import Router, { useRouter } from 'next/dist/client/router'
import { MediaContextProvider, Media } from 'utils/media'

import { Grid, Box, baseTheme, Loader } from 'danni-s-design-system'
import { Header, Footer } from '.'

import { Layout, Locale } from 'types'

const getGridSx = ({
  isDesktop,
  isIndexPage,
}: {
  isDesktop: boolean
  isIndexPage: boolean
}) => {
  const baseProps = {
    maxHeight: `calc((100% - ${baseTheme.space.xxl * 2}px))`,
    minHeight: '90vh',
    boxShadow: baseTheme.shadows.bookLight,
    position: 'relative',
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

export const MainLayout: React.FC<Layout> = ({ children }) => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)
    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', stopLoading)
    }
  }, [])

  const isIndexPage = router.route === '/'

  const { locale, locales } = router

  return (
    <Box bg="darkest" sx={{ maxHeight: 'fit-content', minHeight: '100vh' }}>
      <Header
        {...{ currentLocale: locale as Locale, locales: locales as Locale[] }}
      />
      <MediaContextProvider>
        <Media greaterThanOrEqual="desktop">
          <Grid
            m="auto"
            py="xl"
            px="xxl"
            bg="white"
            sx={getGridSx({ isIndexPage, isDesktop: true })}
          >
            {loading && !isIndexPage ? (
              <Loader
                color="accentDark"
                sx={{
                  position: 'absolute',
                  left: `calc(50% - ${baseTheme.space.elephant}px)`,
                  top: `calc(50% - ${baseTheme.space.elephant}px)`,
                  zIndex: baseTheme.zIndices.above,
                }}
              />
            ) : (
              children
            )}
          </Grid>
        </Media>
        <Media lessThan="desktop">
          <Grid
            m="auto"
            p="l"
            bg="white"
            sx={getGridSx({ isIndexPage, isDesktop: false })}
          >
            {loading && !isIndexPage ? (
              <Loader
                color="accentDark"
                sx={{
                  position: 'absolute',
                  left: `calc(50% - ${baseTheme.space.xxxl}px)`,
                  top: `calc(50% - ${baseTheme.space.elephant}px)`,
                  zIndex: baseTheme.zIndices.above,
                }}
              />
            ) : (
              children
            )}
          </Grid>
        </Media>
      </MediaContextProvider>
      <Footer />
    </Box>
  )
}
