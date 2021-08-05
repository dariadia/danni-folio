import React from 'react'
import { NextApiRequest } from 'next'

import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Link from 'next/link'
import { baseTheme, HeadingH3, Button } from 'danni-s-design-system'
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
      <Link href="/contents" passHref>
        <motion.a
          style={{ textDecoration: 'none' }}
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
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
            sx={{
              borderRadius: baseTheme.radii.m,
              textTransform: 'uppercase',
            }}
          >
            <HeadingH3 variant="headingSmall" kind="serif">
              {t('click_to_open')}
            </HeadingH3>
          </Button>
        </motion.a>
      </Link>
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
