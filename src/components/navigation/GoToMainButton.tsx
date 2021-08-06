import React from 'react'

import { useTranslation } from 'next-i18next'
import { MediaContextProvider, Media } from 'utils/media'

import { baseTheme, HeadingH3, Button } from 'danni-s-design-system'

import type { ConstrainedBoxProps } from 'danni-s-design-system'

export const GoToMainButton: React.FC<ConstrainedBoxProps> = () => {
  const { t } = useTranslation(['common'])

  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
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
            {t('go_to_main')}
          </HeadingH3>
        </Button>
      </Media>
      <Media lessThan="tablet">
        <Button
          activeColor="complementaryLight"
          bg="complementaryLight"
          color="white"
          p="s"
          my="s"
          mx="auto"
          textAlign="center"
          transition="slow"
          sx={{
            borderRadius: baseTheme.radii.m,
            textTransform: 'uppercase',
          }}
        >
          <HeadingH3
            variant="headingSmall"
            kind="serif"
            sx={{ fontSize: `${baseTheme.space.m}px` }}
          >
            {t('go_to_main')}
          </HeadingH3>
        </Button>
      </Media>
    </MediaContextProvider>
  )
}
