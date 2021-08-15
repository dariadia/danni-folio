import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { usePersonasAPI } from '@/hooks/use-api'
import { PARA_ABILITIES, PERSONAS } from 'constants/apis'
import { matchByKey } from 'utils/foreign-key-match'

import { MainLayout } from '@/components/layouts'
import { List, Box, Loader } from 'danni-s-design-system'
import { PersonaCard } from '@/components'

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

  if (!personas || !paraAbilities) return <Loader />
  if (personasFetchError || paraAbilitiesFetchError) return <Box>⚠️</Box>

  const common = matchByKey({
    personas: personas as Personas,
    paraAbilities: paraAbilities as ParaAbilities,
  })

  return (
    <List>
      {common.map((persona: PersonaWithParaAbilityDescription) => (
        <PersonaCard key={persona.id} persona={persona} />
      ))}
    </List>
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
