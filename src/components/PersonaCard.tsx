import React, { useState } from 'react'

import {
  baseTheme,
  Box,
  Colour,
  BgColour,
  Text,
  HoverableText,
  Popup,
  List,
  HeadingH3,
} from 'danni-s-design-system'
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
  const [descriptionShown, showDescription] = useState(false)

  const {
    persona_name,
    para_ability: paraAbility,
    description,
    behaviour_patterns,
    kind,
    advice,
    advice_web,
    emoji,
  } = persona

  return (
    <>
      {descriptionShown && (
        <Popup p="xxxl" onClose={() => showDescription(!descriptionShown)}>
          <Box mx="auto" maxWidth={`${baseTheme.space.dinosaur * 2}px`}>
            <HeadingH3 mb="xl" kind="serif" color="accentDark">
              {emoji} {paraAbility}
            </HeadingH3>
            <Text mb="xl">
              <Text fontWeight="bold" mr="xs" inlineBlock>
                Kind:
              </Text>
              {kind}
            </Text>
            {behaviour_patterns && behaviour_patterns.length > 0 && (
              <List
                liSx={{ marginBottom: `${baseTheme.space.s}px` }}
                sx={{ marginBottom: `${baseTheme.space.l}px` }}
              >
                {behaviour_patterns.map(pattern => (
                  <Text key={pattern}>💁 {pattern}</Text>
                ))}
              </List>
            )}
            {advice && advice.length > 0 && (
              <List
                liSx={{ marginBottom: `${baseTheme.space.s}px` }}
                sx={{ marginBottom: `${baseTheme.space.l}px` }}
              >
                {advice.map(item => (
                  <Text key={item}>{item} 🤲</Text>
                ))}
              </List>
            )}
            {advice_web && advice_web.length > 0 && (
              <List
                liSx={{ marginBottom: `${baseTheme.space.s}px` }}
                sx={{ marginBottom: `${baseTheme.space.l}px` }}
              >
                {advice_web.map(item => (
                  <Text key={item}>🛠{item}</Text>
                ))}
              </List>
            )}
          </Box>
        </Popup>
      )}
      <Box
        my="xxxl"
        mx="auto"
        textAlign="center"
        minWidth={`${baseTheme.space.elephant}px`}
        maxWidth={`${baseTheme.space.dinosaur * 2}px`}
        minHeight={`${baseTheme.space.elephant}px`}
        onClick={() => showDescription(!descriptionShown)}
      >
        <Avatar bg={randomColour as BgColour} size="elephant" mx="auto" />
        <Box sx={{ cursor: 'pointer' }}>
          <Text mt="m" as="h4">
            {persona_name}
          </Text>
          <HoverableText
            fontWeight="bold"
            color="accentDark"
            activeColour="complementaryDark"
          >
            {paraAbility}
          </HoverableText>
          <Text my="s">{description}</Text>
        </Box>
      </Box>
    </>
  )
}
