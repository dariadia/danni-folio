import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { Box } from 'danni-s-design-system'

import type { Page, Locale } from 'types'

const Title = styled('h1')`
  font-size: 50px;
  color: ${({ theme }) => theme.colours.accentDark};
`

type Props = {}

const HomePage: Page<Props> = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Link href="/" locale="en-GB">
        <a>en-GB</a>
      </Link>
      <Box mr="s" inlineBlock />
      <Link href="/" locale="en-US">
        <a>en-US</a>
      </Link>
      <Box mr="s" inlineBlock />
      <Link href="/" locale="de">
        <a>DE</a>
      </Link>
      <Box mr="s" inlineBlock />
      <Link href="/" locale="ru">
        <a>RU</a>
      </Link>
      <Title>{t('greeting')}</Title>
    </>
  )
}

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
