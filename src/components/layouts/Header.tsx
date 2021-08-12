import React, { useContext, useState } from 'react'

import { useRouter } from 'next/dist/client/router'
import { useTranslation } from 'next-i18next'

import styled, { ThemeContext } from 'styled-components'

import { motion } from 'framer-motion'
import { MediaContextProvider, Media } from 'utils/media'
import { CONTENTS } from 'constants/locations'

import Link from 'next/link'
import { baseTheme, Text, Box, Button, ThemeType } from 'danni-s-design-system'
import { GoToMainButton } from '..'

import { LanguageAvailable, LANGUAGES } from 'constants/languages'

import { Locale } from 'types'

const StyledHeader = styled('header')`
  display: flex;
  align-items: center;
  position: relative;
  min-height: ${baseTheme.space.xxxl}px;
  text-decoration: none;
`

type ButtonProps = {
  isContentsPage: boolean
}

type HeaderProps = {
  currentLocale: Locale
  locales: Locale[]
}

const ButtonWithMotion: React.FC<ButtonProps> = ({ isContentsPage }) => {
  const ButtonXDesktop = baseTheme.space.xl
  const ButtonXMobile = baseTheme.space.s
  const ButtonY = baseTheme.space.xxl

  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <Link href={isContentsPage ? '/' : `/${CONTENTS}`} passHref>
          <motion.a
            style={{
              textDecoration: 'none',
              height: 'fit-content',
              position: 'absolute',
              zIndex: baseTheme.zIndices.above,
              right: `-${ButtonXDesktop}px`,
              top: `-${ButtonY}px`,
            }}
            layoutId="navButton"
            initial={{ scale: 0.47 }}
            whileHover={{ scale: 0.5 }}
            whileTap={{ scale: 0.4, filter: 'brightness(0.8)' }}
          >
            <GoToMainButton />
          </motion.a>
        </Link>
      </Media>
      <Media lessThan="tablet">
        <Link href={isContentsPage ? '/' : `/${CONTENTS}`} passHref>
          <motion.a
            style={{
              textDecoration: 'none',
              height: 'fit-content',
              position: 'absolute',
              zIndex: baseTheme.zIndices.above,
              right: `${ButtonXMobile}px`,
              top: `-${ButtonY}px`,
            }}
            layoutId="navButton"
            initial={{ scale: 0.47 }}
            whileHover={{ scale: 0.5 }}
            whileTap={{ scale: 0.5 }}
          >
            <GoToMainButton />
          </motion.a>
        </Link>
      </Media>
    </MediaContextProvider>
  )
}

const StyledLanguageButton = styled(Button).attrs({
  m: 'xs',
  border: '1px solid accentLightest',
  borderOnHover: 'accentDark',
  bg: 'accentDark',
  color: 'accentLightest',
  activeColour: 'accentLightest',
  transition: 'slow',
  inlineBlock: true,
})`
  text-transform: uppercase;
  &:focus {
    color: ${({ theme }) => theme.colours.accentLightest};
    background: ${({ theme }) => theme.colours.complementaryLight};
  }
`

const LanguageButton = ({ locale }: { locale: Locale }) => {
  const theme = useContext(ThemeContext) as ThemeType
  return (
    <Link href="" locale={locale}>
      <StyledLanguageButton theme={theme}>{locale}</StyledLanguageButton>
    </Link>
  )
}

export const Header: React.FC<HeaderProps> = ({ currentLocale, locales }) => {
  const { t } = useTranslation(['languages', 'common'])

  const [languageControlsShown, toggleLanguageControls] = useState(true)

  const router = useRouter()
  const isIndexPage = router.route === '/'
  const isContentsPage = router.route.includes(CONTENTS)

  const currentLanguage = t(
    `languages:${LANGUAGES[currentLocale as LanguageAvailable]}` as string,
  )

  return (
    <StyledHeader
      onClick={() => toggleLanguageControls(!languageControlsShown)}
    >
      {languageControlsShown && (
        <Box mx="m">
          <Text mr="xs" color="accentLightest" inlineBlock>
            {t('common:language_detected')}{' '}
            <Text fontWeight="bold" inlineBlock>
              {currentLanguage}
            </Text>
            ?
          </Text>
          <Text mr="xs" color="accentLightest" inlineBlock>
            {t('common:languages_available')}
          </Text>
          {locales.map(
            locale =>
              locale !== currentLocale && (
                <LanguageButton key={locale} locale={locale} />
              ),
          )}
        </Box>
      )}
      {!isIndexPage && <ButtonWithMotion isContentsPage={isContentsPage} />}
    </StyledHeader>
  )
}
