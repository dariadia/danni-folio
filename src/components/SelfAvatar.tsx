import React from 'react'
import styled from 'styled-components'

import { Circle, Box, baseTheme, mainTheme } from 'danni-s-design-system'
import type { ConstrainedBoxProps } from 'danni-s-design-system'

const NONBINARY_COLOUR =
  'linear-gradient(180deg, #FFF430 25%, #FFFFFF 25%, 50%, #9C59D1 50%, 75%, #181818 75%)'
const GREYROMANTIC_COLOUR =
  'linear-gradient(180deg, #39A33E 20%, #A3A3A3 20%, 40%, #FFFFFF 40%, 60%, #A3A3A3 60%, 80%, #39A33E 80%)'

const LEFT = 'left'
const RIGHT = 'right'
// const SKIN = '#D2996C'
const HAIR = '#FD6700'
// const GLASSES = '#4B0082'

type Hair = {
  side: 'left' | 'right'
}

const Wrapper = styled(Circle)<ConstrainedBoxProps>`
  width: 300px;
  height: 300px;
  margin: ${({ mx, my }) => `${String(my)} ${String(mx)}`};
  position: relative;
  background: ${NONBINARY_COLOUR};
  overflow: hidden;
  transition: background 0.5s ease;
  &:hover {
    background: ${GREYROMANTIC_COLOUR};
    .shine::before {
      animation: glasses-flash 2s ease-in reverse;
    }
`

const HairBack = styled(Box).attrs({
  width: baseTheme.space.elephant,
})<Hair>`
  height: 120px;
  position: absolute;
  background: ${HAIR};
  left: ${({ side }) => (side === LEFT ? '25%' : '46%')};
  top: 40%;
  border-radius: 200px;
  &:after {
    content: '';
    position: absolute;
    width: 107px;
    height: 80px;
    background: ${HAIR};
    box-shadow: inset 2px -25px 24px 0px darken($hair, 15%);
    border-radius: 300px;
    top: 36%;
    right: -8%;
  }
`

const Shirt = styled(Box)`
  width: 60px;
  height: 30px;
  background: ${mainTheme.colours.accentDark};
  position: absolute;
  left: calc(50% - 30px);
  top: 75%;
  z-index: ${baseTheme.zIndices.upAbove};
  &:after {
    content: '';
    position: absolute;
    border-bottom: 20px solid darken(white, 10%);
    border-left: 20x solid transparent;
    border-right: 15px solid transparent;
    height: 0;
    width: 22px;
    right: calc(50% - 10px);
    top: -20px;
  }
  &:before {
    content: '';
    position: absolute;
    border-bottom: 20px solid darken(white, 20%);
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    height: 0;
    width: 25px;
    right: 2px;
    top: -20px;
  }
`

const ShirtButton = styled(Box)`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${mainTheme.colours.accentLightest};
  border-radius: 100%;
  left: calc(50% - 5px);
  top: 10px;
`

export const SelfAvatar: React.FC<ConstrainedBoxProps> = ({ mx, my }) => (
  <Wrapper {...{ mx, my }}>
    <HairBack side={LEFT} />
    <HairBack side={RIGHT} />
    <Shirt>
      <ShirtButton />
    </Shirt>
  </Wrapper>
)
