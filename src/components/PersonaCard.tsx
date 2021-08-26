import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'

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
import {
  PARA_ABILITY_DESCRIPTION,
  PARA_ABILITY_NAME,
} from 'constants/locations'

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
  const { t } = useTranslation('about')

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

  const { do: webDo, do_not: webDoNot } = advice_web

  return (
    <>
      {descriptionShown && (
        <Popup
          ariaLabelledby={PARA_ABILITY_NAME}
          ariaDescribedby={PARA_ABILITY_DESCRIPTION}
          p="xxxl"
          onClose={() => showDescription(!descriptionShown)}
        >
          <Box mx="auto" maxWidth={`${baseTheme.space.dinosaur * 2}px`}>
            <HeadingH3
              id={PARA_ABILITY_NAME}
              mb="xl"
              kind="serif"
              color="accentDark"
            >
              {emoji} {paraAbility}
            </HeadingH3>
            <Text mb="xl">
              <Text bold mr="xs" inlineBlock>
                Kind:
              </Text>
              {kind}
            </Text>
            {behaviour_patterns && behaviour_patterns.length > 0 && (
              <List
                id={PARA_ABILITY_DESCRIPTION}
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
            {webDo && webDo.length > 0 && (
              <List
                liSx={{ marginBottom: `${baseTheme.space.s}px` }}
                sx={{ marginBottom: `${baseTheme.space.l}px` }}
              >
                {webDo.map(item => (
                  <Text key={item}>🛠{item}</Text>
                ))}
              </List>
            )}
            {webDoNot && webDoNot.length > 0 && (
              <List
                liSx={{ marginBottom: `${baseTheme.space.s}px` }}
                sx={{ marginBottom: `${baseTheme.space.l}px` }}
              >
                {webDoNot.map(item => (
                  <Text key={item}>❌{item}</Text>
                ))}
              </List>
            )}
          </Box>
        </Popup>
      )}
      <Box
        as="article"
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
            bold
            color="accentDark"
            activeColour="complementaryDark"
          >
            {paraAbility}
          </HoverableText>
          <Text
            my="s"
            variant="bodySm"
            bold
            sx={{ textTransform: 'none' }}
            color="complementaryLight"
          >
            ➠ {t('click_to_open')}
          </Text>
          <Text my="s">{description}</Text>
        </Box>
      </Box>
    </>
  )
}
