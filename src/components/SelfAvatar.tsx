import React from 'react'
import styled from 'styled-components'

import { Circle, ConstrainedBoxProps } from 'danni-s-design-system'

const NONBINARY_COLOUR =
  'linear-gradient(180deg, #FFF430 25%, #FFFFFF 25%, 50%, #9C59D1 50%, 75%, #181818 75%)'
const GREYROMANTIC_COLOUR =
  'linear-gradient(180deg, #39A33E 20%, #A3A3A3 20%, 40%, #FFFFFF 40%, 60%, #A3A3A3 60%, 80%, #39A33E 80%)'

const Wrapper = styled(Circle).attrs({
  size: 'dinosaur',
})<ConstrainedBoxProps>`
  margin: ${({ mx, my }) => `${String(my)} ${String(mx)}`};
  background: ${NONBINARY_COLOUR};
  overflow: hidden;
  transition: background 0.5s ease;
  &:hover {
    background: ${GREYROMANTIC_COLOUR};
    .shine::before {
      animation: glasses-flash 2s ease-in reverse;
    }
`

export const SelfAvatar: React.FC<ConstrainedBoxProps> = ({ mx, my }) => (
  <Wrapper {...{ mx, my }} />
)
