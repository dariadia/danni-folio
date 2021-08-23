import React from 'react'

import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Link from 'next/link'
import { MainLayout } from '@/components/layouts'
import { ClickMeButton, SelfAvatar } from '@/components'
import { baseTheme, Box } from 'danni-s-design-system'

import { CONTENTS } from 'constants/locations'
import { MediaContextProvider, Media } from 'utils/media'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const HomePage: Page<SinglePageProps> = () => {
  return (
    <>
      <Link href={`/${CONTENTS}`} passHref>
        <motion.a className="selfAvatar" layoutId="selfAvatar">
          <MediaContextProvider>
            <Media greaterThanOrEqual="mobile">
              <SelfAvatar mx="auto" my="xxxl" />
            </Media>
            <Media lessThan="mobile">
              <Box
                ml={`-${baseTheme.space.xl}px`}
                mt={`-${baseTheme.space.xxxl}px`}
              >
                <SelfAvatar
                  sx={{ transform: 'scale(0.8)' }}
                  mx="auto"
                  my="xxxl"
                />
              </Box>
            </Media>
          </MediaContextProvider>
        </motion.a>
      </Link>
      <Link href={`/${CONTENTS}`} passHref>
        <motion.a
          style={{ textDecoration: 'none' }}
          layoutId="navButton"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9, filter: 'brightness(0.8)' }}
        >
          <MediaContextProvider>
            <Media greaterThanOrEqual="mobile">
              <ClickMeButton />
            </Media>
            <Media lessThan="mobile">
              <Box
                ml={`-${baseTheme.space.xl}px`}
                mt={`-${baseTheme.space.xxxl}px`}
              >
                <ClickMeButton />
              </Box>
            </Media>
          </MediaContextProvider>
        </motion.a>
      </Link>
    </>
  )
}

HomePage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: SinglePageProps }> {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'languages'])),
    },
  }
}

export default HomePage
