import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { motion } from 'framer-motion'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { CONTACTS } from 'constants/contacts'
import { MediaContextProvider, Media } from 'utils/media'

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
  HeadingH3,
} from 'danni-s-design-system'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const Contacts = () => {
  const { t } = useTranslation(['contacts', 'common'])
  const contactNodesArray = []

  for (const contact in CONTACTS) {
    const { link, value, translationKey, hintKey } = CONTACTS[contact]
    const contactName = translationKey
      ? t(`contacts:${translationKey}`)
      : contact.toLowerCase()

    contactNodesArray.push(
      link ? (
        <Link
          key={contact}
          mb="s"
          href={link}
          target="_blank"
          sx={{ textDecoration: 'none' }}
        >
          <HoverableText>
            <Text color="complementaryDark" bold mr="s" inlineBlock>
              {contactName}:
            </Text>
            {value} {hintKey && <i>({t(`common:${hintKey}`)})</i>}
          </HoverableText>
        </Link>
      ) : (
        <Text key={contact}>
          <Text mb="s" color="complementaryDark" bold mr="s" inlineBlock>
            {contactName}:
          </Text>
          {value} {hintKey && <i>({t(`common:${hintKey}`)})</i>}
        </Text>
      ),
    )
  }
  return contactNodesArray
}

const ContactsPage: Page<SinglePageProps> = () => {
  const { t } = useTranslation(['contacts'])
  const theme = useContext(ThemeContext) as ThemeType
  const delayHeading = baseTheme.durations.s / 1000
  const delayContents = baseTheme.durations.l / 1000

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
        <motion.div
          className="contactsHeading"
          layoutId="contactsHeading"
          style={{ width: 'fit-content', margin: 'auto' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delayHeading }}
        >
          <MediaContextProvider>
            <Media greaterThanOrEqual="tablet">
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
            </Media>
            <Media lessThan="tablet">
              <HeadingH3
                as="h1"
                kind="serif"
                ml="m"
                px="s"
                color="accentDark"
                sx={{
                  textTransform: 'capitalize',
                  borderBottom: `2px solid ${theme.colours.complementaryDark}`,
                }}
              >
                {t('contacts')}
              </HeadingH3>
            </Media>
          </MediaContextProvider>
        </motion.div>
      </Flex>
      <Flex
        as="section"
        pr="s"
        py="s"
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: baseTheme.shadows.low,
        }}
      >
        <motion.div
          className="contactsContent"
          layoutId="contactsContent"
          style={{ margin: 'auto', width: 'fit-content' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: baseTheme.space.s }}
          transition={{ delay: delayContents }}
        >
          <List>{Contacts()}</List>
        </motion.div>
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
      ...(await serverSideTranslations(locale, [
        'common',
        'contacts',
        'languages',
      ])),
    },
  }
}

export default ContactsPage
