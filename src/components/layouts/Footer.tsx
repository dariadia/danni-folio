import React from 'react'
import { useTranslation } from 'next-i18next'

import { HoverableText, Text, Link, Flex } from 'danni-s-design-system'

import { CONTACTS } from 'constants/contacts'

const TTO = 2021

export const Footer: React.FC = () => {
  const { t } = useTranslation(['common'])

  const currentYear = new Date().getFullYear()

  return (
    <Flex mx="xl" p="m" justifyContent="flex-end">
      <Text>
        <Link
          target="_blank"
          href={CONTACTS.GITHUB.link}
          color="accentLightest"
          sx={{ textDecoration: 'none' }}
          inlineBlock
        >
          <HoverableText activeColour="complementaryDark">
            {CONTACTS.GITHUB.value} ©
          </HoverableText>
        </Link>
        <Text color="accentLightest" ml="s" inlineBlock>
          2021{currentYear !== TTO && ` – ${currentYear}`}.
        </Text>
      </Text>
      <Link
        href="https://github.com/dariadia/danni-s-folio/issues"
        target="_blank"
        color="accentLightest"
        sx={{ textDecoration: 'none' }}
        ml="s"
      >
        <HoverableText activeColour="complementaryDark">
          {t('plans')}
        </HoverableText>
      </Link>
    </Flex>
  )
}
