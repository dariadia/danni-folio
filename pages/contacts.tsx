import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { CONTACTS } from 'constants/contacts'

import { MainLayout } from '@/components/layouts'
import {
  baseTheme,
  ThemeType,
  Flex,
  HeadingH2,
  List,
  Text,
  HoverableText,
  Link,
} from 'danni-s-design-system'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const Contacts = () => {
  const { t } = useTranslation(['contacts'])
  const contactNodesArray = []

  for (const contact in CONTACTS) {
    const { link, value, translationKey } = CONTACTS[contact]
    const contactName = translationKey
      ? t(translationKey)
      : contact.toLowerCase()

    contactNodesArray.push(
      link ? (
        <>
          <Link
            mb="s"
            href={link}
            target="_blank"
            sx={{ textDecoration: 'none' }}
          >
            <HoverableText>
              <Text
                color="complementaryDark"
                fontWeight="bold"
                mr="s"
                inlineBlock
              >
                {contactName}:
              </Text>
              {value}
            </HoverableText>
          </Link>
        </>
      ) : (
        <>
          <Text
            mb="s"
            color="complementaryDark"
            fontWeight="bold"
            mr="s"
            inlineBlock
          >
            {contactName}:
          </Text>
          {value}
        </>
      ),
    )
  }
  return contactNodesArray
}

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
        <List sx={{ margin: 'auto' }} width="fit-content">
          {Contacts()}
        </List>
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
