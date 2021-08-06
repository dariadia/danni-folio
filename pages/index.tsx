import React from 'react'
// import { NextApiRequest } from 'next'

import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Link from 'next/link'
import { MainLayout } from '@/components/layouts'
import { ClickMeButton, SelfAvatar } from '@/components'

import type { Page, Locale, IndexPage as IndexPageProps } from 'types'

const HomePage: Page<IndexPageProps> = () => {
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
}: // req,
{
  locale: Locale
  // req: NextApiRequest
}): Promise<{ props: IndexPageProps }> {
  return {
    props: {
      userAgentString:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default HomePage
