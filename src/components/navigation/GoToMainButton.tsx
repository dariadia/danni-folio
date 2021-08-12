import React from 'react'

import { useTranslation } from 'next-i18next'

import { baseTheme, HeadingH3, Button } from 'danni-s-design-system'

import type { ConstrainedBoxProps } from 'danni-s-design-system'

export const GoToMainButton: React.FC<ConstrainedBoxProps> = ({ my }) => {
  const { t } = useTranslation(['common'])

  return (
    <Button
      activeColour="complementaryLight"
      bg="complementaryLight"
      color="white"
      p="m"
      my={my}
      mx="auto"
      textAlign="center"
      transition="slow"
      sx={{
        borderRadius: baseTheme.radii.m,
        textTransform: 'uppercase',
        minWidth: `${baseTheme.space.elephant * 4}px`,
        maxWidth: `${baseTheme.space.dinosaur * 2}px`,
      }}
    >
      <HeadingH3 variant="headingSmall" kind="serif">
        {t('go_to_main')}
      </HeadingH3>
    </Button>
  )
}
