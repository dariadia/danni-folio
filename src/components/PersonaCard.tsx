import React from 'react'

import { baseTheme, Box, Colour, BgColour, Text } from 'danni-s-design-system'
import { Avatar } from '.'

import type { Persona } from 'types'

type PersonaCardProps = {
  persona: Persona
}
// TODO add avatars from the avatar-builder project
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

export const PersonaCard: React.FC<PersonaCardProps> = ({ persona }) => {
  const colours = [
    'accentDark',
    'accentLight',
    'accentLightest',
    'complementaryDark',
    'complementaryLight',
  ] as Colour[]
  const randomColourKey = getRandomInt(colours.length - 1)
  const randomColour = colours[randomColourKey]

  const { name, para_ability: paraAbility } = persona

  return (
    <Box
      my="m"
      textAlign="center"
      minWidth={`${baseTheme.space.elephant}px`}
      minHeight={`${baseTheme.space.elephant}px`}
    >
      <Avatar bg={randomColour as BgColour} size="elephant" mx="auto" />
      <Text mt="m" as="h4">
        {name}
      </Text>
      <Text>
        <Text fontWeight="bold" inlineBlock>
          Para-ability:{' '}
        </Text>
        {paraAbility}
      </Text>
    </Box>
  )
}
