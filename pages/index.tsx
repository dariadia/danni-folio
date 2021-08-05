import React from 'react'
import { NextApiRequest } from 'next'

import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Link from 'next/link'
import { MainLayout } from '@/components/layouts'
import { SelfAvatar } from '@/components'

import type { Page, Locale, IndexPage as IndexPageProps } from 'types'
import { Button } from 'danni-s-design-system'

const HomePage: Page<IndexPageProps> = () => {
  return (
    <>
      <motion.div className="selfAvatar" layoutId="selfAvatar">
        <SelfAvatar mx="auto" my="xxxl" />
      </motion.div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/contents" passHref>
          <Button
            activeColor="complementaryDark"
            bg="accentDark"
            color="accentLightest"
            p="s"
            my="l"
            mx="auto"
            textAlign="center"
            transition="slow"
          >
            Open!
          </Button>
        </Link>
      </motion.div>
    </>
  )
}

HomePage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getServerSideProps({
  locale,
  req,
}: {
  locale: Locale
  req: NextApiRequest
}): Promise<{ props: IndexPageProps }> {
  return {
    props: {
      userAgentString: req.headers['user-agent'],
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default HomePage
