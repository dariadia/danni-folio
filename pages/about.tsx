import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MediaContextProvider, Media } from 'utils/media'

import {
  Flex,
  Box,
  Text,
  baseTheme,
  HeadingH2,
  HeadingH3,
  List,
  ThemeType,
  Details,
} from 'danni-s-design-system'
import { MainLayout } from '@/components/layouts'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'
import { Avatar } from '@/components'

const AboutPage: Page<SinglePageProps> = () => {
  const { t } = useTranslation(['common', 'about'])
  const theme = useContext(ThemeContext) as ThemeType
  const delayHeading = baseTheme.durations.s / 1000
  const delayPixelMeImage = baseTheme.durations.xl / 1000
  const delayContents = baseTheme.durations.l / 1000

  return (
    <>
      <Flex
        pl="s"
        pr="xxl"
        py="m"
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: baseTheme.shadows.low,
        }}
      >
        <motion.div
          className="contactsHeading"
          layoutId="contactsHeading"
          style={{ width: 'fit-content', margin: 'auto' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delayHeading }}
        >
          <MediaContextProvider>
            <Media greaterThanOrEqual="tablet">
              <HeadingH2
                as="h1"
                kind="serif"
                m="auto"
                px="l"
                color="accentDark"
                width="fit-content"
                sx={{
                  textTransform: 'capitalize',
                  borderBottom: `2px solid ${theme.colours.complementaryDark}`,
                }}
              >
                {t('common:about')}
              </HeadingH2>
            </Media>
            <Media lessThan="tablet">
              <HeadingH3
                as="h1"
                kind="serif"
                ml="m"
                px="s"
                color="accentDark"
                sx={{
                  textTransform: 'capitalize',
                  borderBottom: `2px solid ${theme.colours.complementaryDark}`,
                }}
              >
                {t('common:about')}
              </HeadingH3>
            </Media>
          </MediaContextProvider>
          <motion.div
            className="pixelMe"
            layoutId="pixelMe"
            style={{
              width: 'fit-content',
              margin: `${baseTheme.space.xxxl}px auto`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delayPixelMeImage }}
          >
            <img
              height={`${baseTheme.space.elephant}px`}
              src="/assets/pixel-me.png"
              alt={t('about:image')}
            />
          </motion.div>
        </motion.div>
      </Flex>
      <Box
        as="section"
        p="xxxl"
        sx={{
          boxShadow: baseTheme.shadows.low,
        }}
      >
        <motion.div
          className="contactsContent"
          layoutId="contactsContent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: baseTheme.space.s }}
          transition={{ delay: delayContents }}
        >
          <List>
            <Details
              withMarker={{ closed: '🧑🏽‍💻', open: '🦹🏽' }}
              summary={<Text>{t('about:professional')}</Text>}
            >
              <Avatar size="elephant">
                <img src="assets/photo-me.png" alt={t('about:photo')} />
              </Avatar>
            </Details>
            <Details
              withMarker={{ closed: '👩🏽‍🦰', open: '🧘🏽' }}
              summary={t('about:personal')}
            >
              <Avatar size="elephant">
                <img src="assets/photo-me-yoga.png" alt={t('about:photo')} />
              </Avatar>
            </Details>
          </List>
        </motion.div>
      </Box>
    </>
  )
}

AboutPage.Layout = ({ children, ...props }) => (
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
      ...(await serverSideTranslations(locale, ['common', 'about'])),
    },
  }
}

export default AboutPage
