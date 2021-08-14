import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { usePersonasAPI } from '@/hooks/use-api'
import { PERSONAS } from 'constants/apis'

import { MainLayout } from '@/components/layouts'
import { List, Box, Loader } from 'danni-s-design-system'
import { PersonaCard } from '@/components'

import type {
  Locale,
  Page,
  SinglePage as SinglePageProps,
  Personas,
  Persona,
} from 'types'

const ParaAbilityPersonasPage: Page<SinglePageProps> = () => {
  // eslint-disable-next-line prefer-const
  let { data: personas, error } = usePersonasAPI({
    url: PERSONAS,
  })
  personas = personas as Personas

  if (!personas) return <Loader />
  if (error) return <Box>⚠️</Box>

  return (
    <List>
      {personas.map((persona: Persona) => (
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
