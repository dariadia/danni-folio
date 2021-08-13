import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const ParaAbilityPersonasPage: Page<SinglePageProps> = () => {
  return <>hello world</>
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

export default ParaAbilityPersonasPage
