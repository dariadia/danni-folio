import React from 'react'

import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Link from 'next/link'
import { MainLayout } from '@/components/layouts'
import { ClickMeButton, SelfAvatar } from '@/components'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const HomePage: Page<SinglePageProps> = () => {
  return (
    <>
      <motion.div className="selfAvatar" layoutId="selfAvatar">
        <SelfAvatar mx="auto" my="xxxl" />
      </motion.div>
      <Link href="/contents" passHref>
        <motion.a
          style={{ textDecoration: 'none' }}
          layoutId="navButton"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
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
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default HomePage
