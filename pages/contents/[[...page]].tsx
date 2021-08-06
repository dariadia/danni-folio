import React from 'react'
import { NextApiRequest } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MainLayout } from '@/components/layouts'
import { SelfAvatar } from '@/components'

import { motion } from 'framer-motion'

import type { Page, Locale, ContentsPage as ContentsPageProps } from 'types'
import { baseTheme } from 'danni-s-design-system'

const ContentsPage: Page<ContentsPageProps> = () => {
  const moveX = -baseTheme.space.elephant - baseTheme.space.xl
  const moveY = -baseTheme.space.elephant

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
