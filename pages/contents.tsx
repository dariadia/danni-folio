import React from 'react'

import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Link from 'next/link'
import { baseTheme, Box, HeadingH3, Text } from 'danni-s-design-system'

import { MainLayout } from '@/components/layouts'
import { GoToMainButton, SelfAvatar } from '@/components'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const ContentsPage: Page<SinglePageProps> = () => {
  const { t } = useTranslation(['introduction'])

  const moveSelfAvatarX = -baseTheme.space.elephant * 2
  const moveSelfAvatarY = -baseTheme.space.elephant

  const moveButtonX = baseTheme.space.elephant
  const moveButtonY = -baseTheme.space.xxl

  return (
    <>
      <Link href="/" passHref>
        <motion.a
          className="selfAvatar"
          layoutId="selfAvatar"
          style={{ height: 'fit-content' }}
          initial={{
            scale: 0.4,
            x: moveSelfAvatarX,
            y: moveSelfAvatarY,
          }}
        >
          <SelfAvatar mx="auto" />
        </motion.a>
      </Link>
      <Link href="/" passHref>
        <motion.a
          style={{ textDecoration: 'none', height: 'fit-content' }}
          layoutId="navButton"
          initial={{ scale: 0.47, x: moveButtonX, y: moveButtonY }}
          whileHover={{ scale: 0.5 }}
          whileTap={{ scale: 0.5 }}
        >
          <GoToMainButton />
        </motion.a>
      </Link>
      <Box
        sx={{
          position: 'absolute',
          left: `${baseTheme.space.dinosaur}px`,
          top: `${baseTheme.space.l}px`,
        }}
      >
        <HeadingH3 as="h1" kind="serif">
          {t('greeting')}
        </HeadingH3>
        <Text as="h3" mt="s" sx={{ fontWeight: 400 }}>
          {t('welcome')}
        </Text>
        <Text as="h3" mt="xs" sx={{ fontWeight: 400 }}>
          {t('look_around')}
        </Text>
      </Box>
      <Text as="h3" mt="xs" sx={{ fontWeight: 400 }}>
        <Trans
          i18nKey="introduction:intro_heading"
          components={{ italic: <i /> }}
        />
      </Text>
    </>
  )
}

ContentsPage.Layout = ({ children, ...props }) => (
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
      ...(await serverSideTranslations(locale, ['common', 'introduction'])),
    },
  }
}

export default ContentsPage
