import React from 'react'

import { HoverableText, Text, Link } from 'danni-s-design-system'

import { CONTACTS } from 'constants/contacts'

const TTO = 2021

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Text mr="xxl" sx={{ direction: 'rtl' }}>
      <Text color="accentLightest" ml="s" inlineBlock>
        2021 {currentYear !== TTO && `– ${currentYear}`}
      </Text>
      <Link
        color="accentLightest"
        href={CONTACTS.GITHUB.link}
        sx={{ textDecoration: 'none' }}
        inlineBlock
      >
        <HoverableText activeColour="complementaryDark">
          © {CONTACTS.GITHUB.value}
        </HoverableText>
      </Link>
    </Text>
  )
}
