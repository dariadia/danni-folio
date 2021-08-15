import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { usePersonasAPI } from '@/hooks/use-api'
import { PARA_ABILITIES, PERSONAS } from 'constants/apis'

import { matchByKey } from 'utils/foreign-key-match'
import { MediaContextProvider, Media } from 'utils/media'

import { MainLayout } from '@/components/layouts'
import { List, Box, Loader, HoverableText, Popup } from 'danni-s-design-system'
import { ParaAbilityProjectDescription, PersonaCard } from '@/components'

import type {
  Locale,
  Page,
  SinglePage as SinglePageProps,
  PersonaWithParaAbilityDescription,
  Personas,
  ParaAbilities,
} from 'types'

const ParaAbilityPersonasPage: Page<SinglePageProps> = () => {
  const { data: personas, error: personasFetchError } = usePersonasAPI({
    url: PERSONAS,
  })
  const {
    data: paraAbilities,
    error: paraAbilitiesFetchError,
  } = usePersonasAPI({
    url: PARA_ABILITIES,
  })

  const { t } = useTranslation(['common'])

  const [personasDescShown, togglePersonasDesc] = useState(false)

  if (!personas || !paraAbilities) return <Loader />
  if (personasFetchError || paraAbilitiesFetchError) return <Box>⚠️</Box>

  const common = matchByKey({
    personas: personas as Personas,
    paraAbilities: paraAbilities as ParaAbilities,
  })

  return (
    <>
      {personasDescShown && (
        <Popup
          as="section"
          height="100%"
          onClose={() => togglePersonasDesc(!personasDescShown)}
        >
          <ParaAbilityProjectDescription />
        </Popup>
      )}
      <MediaContextProvider>
        <Media lessThan="tablet">
          <Box mb="xxxl"></Box>
        </Media>
      </MediaContextProvider>
      <List as="section">
        <HoverableText
          onClick={() => togglePersonasDesc(!personasDescShown)}
          mt="s"
          bold
          color="complementaryDark"
          variant="bodyMd"
        >
          ➠ {t('about_project')}
        </HoverableText>
        {common.map((persona: PersonaWithParaAbilityDescription) => (
          <PersonaCard key={persona.id} persona={persona} />
        ))}
      </List>
    </>
  )
}

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: SinglePageProps }> {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'languages'])),
    },
  }
}

ParaAbilityPersonasPage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export default ParaAbilityPersonasPage
