import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { usePersonasAPI } from '@/hooks/use-api'
import { PERSONAS } from 'constants/apis'

import { MainLayout } from '@/components/layouts'
import { List } from 'danni-s-design-system'

import type {
  Locale,
  Page,
  SinglePage as SinglePageProps,
  Personas,
  Persona,
} from 'types'

const ParaAbilityPersonasPage: Page<SinglePageProps> = () => {
  let { data: personas } = usePersonasAPI({
    url: PERSONAS,
  })
  personas = personas as Personas

  return <List>{personas.map((persona: Persona) => persona.name)}</List>
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
