import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colours.accentDark};
`

export default function Home() {
  return <Title>Hello world</Title>
}
