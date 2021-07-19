import styled from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { Page, Locale } from 'types'

const Title = styled('h1')`
  font-size: 50px;
  color: ${({ theme }) => theme.colours.accentDark};
`

type Props = {

}

const HomePage: Page<Props> = () => {
  return <Title>Hello world</Title>
}

export async function getStaticProps({ locale }: {locale: Locale}): Promise<{ props: Props }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default HomePage
