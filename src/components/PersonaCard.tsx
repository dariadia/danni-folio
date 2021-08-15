import React from 'react'

import { baseTheme, Box, Colour, BgColour, Text } from 'danni-s-design-system'
import { Avatar } from '.'

import type { PersonaWithParaAbilityDescription } from 'types'

type PersonaCardProps = {
  persona: PersonaWithParaAbilityDescription
}
// TODO add avatars from the avatar-builder project
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

const colours = [
  'accentDark',
  'accentLight',
  'accentLightest',
  'complementaryDark',
  'complementaryLight',
] as Colour[]

export const PersonaCard: React.FC<PersonaCardProps> = ({ persona }) => {
  const randomColourKey = getRandomInt(colours.length - 1)
  const randomColour = colours[randomColourKey]

  const { persona_name, para_ability: paraAbility, description } = persona

  return (
    <Box
      mt="m"
      mb="xxxl"
      mx="auto"
      textAlign="center"
      minWidth={`${baseTheme.space.elephant}px`}
      maxWidth={`${baseTheme.space.dinosaur * 2}px`}
      minHeight={`${baseTheme.space.elephant}px`}
    >
      <Avatar bg={randomColour as BgColour} size="elephant" mx="auto" />
      <Text mt="m" as="h4">
        {persona_name}
      </Text>
      <Text fontWeight="bold" color="accentDark">
        {paraAbility}
      </Text>
      <Text>{description}</Text>
    </Box>
  )
}
