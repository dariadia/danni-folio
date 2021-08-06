import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MainLayout } from '@/components/layouts'
import { SelfAvatar } from '@/components'

import type { Page, Locale, IndexPage as IndexPageProps } from 'types'
import { NextApiRequest } from 'next'

const HomePage: Page<IndexPageProps> = () => {
  return (
    <>
      <SelfAvatar mx="auto" my="xxxl" />
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
