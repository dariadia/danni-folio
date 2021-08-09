import React from 'react'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MainLayout } from '@/components/layouts'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const AboutPage: Page<SinglePageProps> = () => {
  const { t } = useTranslation(['common'])

  return (
    <>
      <div>{t('greeting')}</div>
    </>
  )
}

AboutPage.Layout = ({ children, ...props }) => (
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

export default AboutPage
