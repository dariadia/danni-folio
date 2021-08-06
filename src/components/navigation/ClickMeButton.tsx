import React from 'react'

import { useTranslation } from 'next-i18next'

import { baseTheme, HeadingH3, Button } from 'danni-s-design-system'
import type { ConstrainedBoxProps } from 'danni-s-design-system'

export const ClickMeButton: React.FC<ConstrainedBoxProps> = () => {
  const { t } = useTranslation(['common'])

  return (
    <Button
      activeColor="complementaryLight"
      bg="complementaryLight"
      color="white"
      p="m"
      my="l"
      mx="auto"
      textAlign="center"
      transition="slow"
      sx={{
        borderRadius: baseTheme.radii.m,
        textTransform: 'uppercase',
      }}
    >
      <HeadingH3 variant="headingSmall" kind="serif">
        {t('click_to_open')}
      </HeadingH3>
    </Button>
  )
}
