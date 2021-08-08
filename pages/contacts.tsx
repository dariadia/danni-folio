import React, { useContext } from 'react'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MainLayout } from '@/components/layouts'

import { baseTheme, Flex, HeadingH2, ThemeType } from 'danni-s-design-system'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'
import { ThemeContext } from 'styled-components'

const ContactsPage: Page<SinglePageProps> = () => {
  const { t } = useTranslation(['contacts'])
  const theme = useContext(ThemeContext) as ThemeType

  return (
    <>
      <Flex
        pl="s"
        pr="xxl"
        py="m"
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: baseTheme.shadows.low,
        }}
      >
        <HeadingH2
          as="h1"
          kind="serif"
          m="auto"
          px="l"
          color="accentDark"
          width="fit-content"
          sx={{
            textTransform: 'capitalize',
            borderBottom: `2px solid ${theme.colours.complementaryDark}`,
          }}
        >
          {t('contacts')}
        </HeadingH2>
      </Flex>
      <Flex
        as="section"
        pl="xl"
        pr="s"
        py="s"
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: baseTheme.shadows.low,
        }}
      >
        {t('contacts')}
      </Flex>
    </>
  )
}

ContactsPage.Layout = ({ children, ...props }) => (
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
      ...(await serverSideTranslations(locale, ['common', 'contacts'])),
    },
  }
}

export default ContactsPage
