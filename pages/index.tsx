import React from 'react'

import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Link from 'next/link'
import { MainLayout } from '@/components/layouts'
import { ClickMeButton, SelfAvatar } from '@/components'

import { CONTENTS } from 'constants/locations'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const HomePage: Page<SinglePageProps> = () => {
  return (
    <>
      <Link href={`/${CONTENTS}`} passHref>
        <motion.a className="selfAvatar" layoutId="selfAvatar">
          <SelfAvatar mx="auto" my="xxxl" />
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
          <ClickMeButton />
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
