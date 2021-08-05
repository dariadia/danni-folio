import React from 'react'
import { NextApiRequest } from 'next'

import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { baseTheme, Button } from 'danni-s-design-system'
import { MainLayout } from '@/components/layouts'
import { SelfAvatar } from '@/components'

import type { Page, Locale, IndexPage as IndexPageProps } from 'types'

const HomePage: Page<IndexPageProps> = () => {
  const { t } = useTranslation(['common'])

  return (
    <>
      <motion.div className="selfAvatar" layoutId="selfAvatar">
        <SelfAvatar mx="auto" my="xxxl" />
      </motion.div>
      <motion.a
        href="/contents"
        style={{ textDecoration: 'none' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          activeColor="complementaryDark"
          bg="complementaryDark"
          color="white"
          p="m"
          my="l"
          mx="auto"
          textAlign="center"
          transition="slow"
          sx={{ borderRadius: baseTheme.radii.m, textTransform: 'uppercase' }}
        >
          {t('click_to_open')}
        </Button>
      </motion.a>
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
