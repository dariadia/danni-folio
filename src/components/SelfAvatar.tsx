import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Circle, Box, baseTheme, mainTheme } from 'danni-s-design-system'
import type { ConstrainedBoxProps } from 'danni-s-design-system'

const NONBINARY_COLOUR =
  'linear-gradient(180deg, #FFF430 25%, #FFFFFF 25%, 50%, #9C59D1 50%, 75%, #181818 75%)'
const GREYROMANTIC_COLOUR =
  'linear-gradient(180deg, #39A33E 20%, #A3A3A3 20%, 40%, #FFFFFF 40%, 60%, #A3A3A3 60%, 80%, #39A33E 80%)'

const LEFT = 'left'
const RIGHT = 'right'
const SKIN = '#D2996C'
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
    box-shadow: inset 2px -25px 24px 0px ${darken(0.15, HAIR)};
    border-radius: 300px;
    top: 36%;
    right: -8%;
  }
`

const HairTop = styled(Circle)`
  position: absolute;
  width: 130px;
  height: 130px;
  background: ${HAIR};
  left: calc(50% - 65px);
  top: 12%;
  box-shadow: inset 10px 7px 5px 0px ${darken(0.07, HAIR)};
  &:after {
    content: '';
    position: absolute;
    width: 90px;
    height: 40px;
    background: ${HAIR};
    border-radius: 0px 200px 0px 200px;
    z-index: 4;
    left: 40px;
    top: 20px;
    transform: rotate(10deg);
    box-shadow: inset 1px 12px 9px 6px ${darken(0.07, HAIR)};
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
    border-bottom: 20px solid ${darken(0.1, 'white')};
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
    border-bottom: 20px solid ${darken(0.2, 'white')};
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

const AvatarHead = styled(Box).attrs({
  width: baseTheme.space.elephant,
})`
  position: absolute;
  z-index: ${baseTheme.zIndices.upAbove};
  height: 120px;
  background: ${SKIN};
  border-radius: 50px;
  left: calc(50% - 45px);
  top: 70px;
`

const AvatarNeck = styled(Box)`
  position: absolute;
  width: 40px;
  height: 50px;
  background: ${SKIN};
  left: calc(50% - 20px);
  top: 60%;
  box-shadow: inset 0px 16px 0px 0px ${darken(0.1, SKIN)};
`

export const SelfAvatar: React.FC<ConstrainedBoxProps> = ({ mx, my }) => (
  <Wrapper {...{ mx, my }}>
    <HairBack side={LEFT} />
    <HairBack side={RIGHT} />
    <HairTop />
    <AvatarHead />
    <AvatarNeck />
    <Shirt>
      <ShirtButton />
    </Shirt>
  </Wrapper>
)
