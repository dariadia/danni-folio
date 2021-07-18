import styled from 'styled-components'
import type { Page } from 'types'

const Title = styled('h1')`
  font-size: 50px;
  color: ${({ theme }) => theme.colours.accentDark};
`

const HomePage: Page<{}> = () => {
  return <Title>Hello world</Title>
}

export default HomePage
