import React from 'react'
import styled from 'styled-components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { MainLayout } from '@/components/layouts'

import type { Page, Locale } from 'types'

const Title = styled('h1')`
  font-size: 50px;
  color: ${({ theme }) => theme.colours.accentDark};
`

type Props = {}

const HomePage: Page<Props> = () => {
  const { t } = useTranslation('common')

  return <Title>{t('greeting')}</Title>
}

HomePage.Layout = MainLayout

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: Props }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default HomePage
