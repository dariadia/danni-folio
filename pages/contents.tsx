import React from 'react'

import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Link from 'next/link'
import {
  baseTheme,
  Box,
  HeadingH3,
  HoverableText,
  List,
  Text,
} from 'danni-s-design-system'

import { MainLayout } from '@/components/layouts'
import { GoToMainButton, SelfAvatar } from '@/components'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const ContentsPage: Page<SinglePageProps> = () => {
  const { t } = useTranslation(['introduction'])

  const moveSelfAvatarX = -baseTheme.space.elephant * 2 - baseTheme.space.s
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
        as="section"
        sx={{
          position: 'absolute',
          left: `${baseTheme.space.dinosaur}px`,
          top: `${baseTheme.space.l}px`,
        }}
      >
        <HeadingH3 as="h1" kind="serif">
          {t('greeting')}
        </HeadingH3>
        <Text as="h3" variant="bodyMd" mt="s" sx={{ fontWeight: 400 }}>
          {t('welcome')}
        </Text>
        <Text variant="bodyMd" mt="xs">
          {t('look_around')}
        </Text>
      </Box>
      <Box as="section">
        <HeadingH3 sx={{ fontSize: baseTheme.space.xl }}>
          <Trans
            i18nKey="introduction:intro_heading"
            components={{ italic: <i /> }}
          />
        </HeadingH3>
        <Text my="m" as="p">
          {t('folio')}
        </Text>
        <List liSx={{ marginLeft: `${baseTheme.space.xl}px` }}>
          <Text mt="s" variant="bodySm">
            {t('folio_definition_one')}
          </Text>
          <Text mt="s" variant="bodySm">
            {t('folio_definition_two')}
          </Text>
        </List>
        <Link href={t('folio_link')} passHref>
          <HoverableText my="m" ml="xl" variant="bodySm">
            {t('definition_origin')}
          </HoverableText>
        </Link>
        <Text mt="l" mb="m" as="p" fontWeight="bold">
          {t('folio_includes')}
        </Text>
        <List liSx={{ marginLeft: `${baseTheme.space.xl}px` }}>
          <Text mt="s">{t('folio_item_books')}</Text>
          <Text mt="s">{t('folio_item_code')}</Text>
          <Text mt="s">{t('folio_item_colour')}</Text>
        </List>
      </Box>
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
