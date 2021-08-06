import React from 'react'
import { NextApiRequest } from 'next'

import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Link from 'next/link'
import { baseTheme } from 'danni-s-design-system'

import { MainLayout } from '@/components/layouts'
import { ClickMeButton, SelfAvatar } from '@/components'

import type { Page, Locale, ContentsPage as ContentsPageProps } from 'types'

const ContentsPage: Page<ContentsPageProps> = () => {
  const moveX = -baseTheme.space.elephant - baseTheme.space.xl
  const moveY = -baseTheme.space.elephant * 2 + baseTheme.space.l

  return (
    <>
      <motion.div
        className="selfAvatar"
        layoutId="selfAvatar"
        initial={{
          scale: 0.4,
          x: moveX,
          y: moveY,
        }}
      >
        <SelfAvatar />
      </motion.div>
      <Link href="/" passHref>
        <motion.a
          style={{ textDecoration: 'none' }}
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

ContentsPage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getServerSideProps({
  locale,
  req,
}: {
  locale: Locale
  req: NextApiRequest
}): Promise<{ props: ContentsPageProps }> {
  return {
    props: {
      userAgentString: req.headers['user-agent'],
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default ContentsPage
