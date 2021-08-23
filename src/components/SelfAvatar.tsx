import React from 'react'
import styled, { keyframes } from 'styled-components'
import { darken } from 'polished'

import { Circle, Box, Flex, baseTheme, mainTheme } from 'danni-s-design-system'
import type { ConstrainedBoxProps } from 'danni-s-design-system'

const NONBINARY_COLOUR =
  'linear-gradient(180deg, #FFF430 25%, #FFFFFF 25%, 50%, #9C59D1 50%, 75%, #181818 75%)'
const GREYROMANTIC_COLOUR =
  'linear-gradient(180deg, #39A33E 20%, #A3A3A3 20%, 40%, #FFFFFF 40%, 60%, #A3A3A3 60%, 80%, #39A33E 80%)'

const LEFT = 'left'
const RIGHT = 'right'
const SKIN = '#D2996C'
const HAIR = '#FD6700'
const GLASSES = '#4B0082'
const FRECKLES_COUNT = 6

type Hair = {
  side: 'left' | 'right'
}

type GlassesLensProps = {
  side: 'left' | 'right'
}

const glassesFlash = keyframes`
  from {
    transform: rotate(30deg);
  }
  to {
    transform: rotate(80deg);
  }
`
const blink = keyframes`
  0% {
    transform: scaleY(1);
  }
  18% {
    transform: scaleY(1);
  }
  20% {
    transform: scaleY(0);
  }
  25% {
    transform: scaleY(1);
  }
  38% {
    transform: scaleY(1);
  }
  40% {
    transform: scaleY(0);
  }
  45% {
    transform: scaleY(1);
  }
  80% {
    transform: scaleY(1);
  }
`

const Wrapper = styled(Circle)<ConstrainedBoxProps>`
  width: 300px;
  height: 300px;
  margin: ${({ mx, my }) => `${String(my || 0)} ${String(mx || 0)}`};
  position: relative;
  background: ${NONBINARY_COLOUR};
  overflow: hidden;
  transition: background 0.5s ease;
  &:hover {
    background: ${GREYROMANTIC_COLOUR};
    .shine::before {
      animation: ${glassesFlash} 2s ease-in reverse;
    }
    ${
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ({ sx }) => sx
    };
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

const Head = styled(Box).attrs({
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

const Neck = styled(Box)`
  position: absolute;
  width: 40px;
  height: 50px;
  background: ${SKIN};
  left: calc(50% - 20px);
  top: 60%;
  box-shadow: inset 0px 16px 0px 0px ${darken(0.1, SKIN)};
`

const Face = styled(Box)`
  width: 500px;
  height: 500px;
  position: absolute;
  left: calc(50% - 35px);
  top: calc(50% - 50px);
  z-index: ${baseTheme.zIndices.upAbove};
`

const Eyebrow = styled(Box)`
  width: 20px;
  height: 5px;
  background: ${darken(0.4, HAIR)};
`

const Eyebrows = styled(Flex)`
  width: 70px;
  justify-content: space-between;
`

const Eyes = styled(Flex)`
  justify-content: space-between;
  position: absolute;
  top: 12px;
  left: -7px;
  &::before,
  &::after {
    background: black;
    display: inline-block;
    content: '';
    width: 15px;
    height: 30px;
    margin: 0 14px;
    border-radius: 200px;
    animation: ${blink} 3s ease-in-out infinite;
  }
`

const Glasses = styled(Box)`
  position: relative;
  width: 5px;
  height: 2px;
  background: ${GLASSES};
  left: 6.5%;
  top: 25px;
`

const GlassesLens = styled(Circle).attrs({ size: '50px' })<GlassesLensProps>`
  position: absolute;
  background: transparent;
  border-radius: 100%;
  border: 2px solid ${GLASSES};
  left: ${({ side }) => (side === LEFT ? '-50px' : '4px')};
  top: -22px;
  overflow: hidden;
  z-index: ${baseTheme.zIndices.above};
`

const Shine = styled(Box).attrs({ className: 'shine' })`
  position: absolute;
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 100px;
    background: white;
    opacity: 0.3;
    transform: rotate(30deg);
    top: -25px;
    left: 5px;
  }
  &:after {
    @extend .shine, :before;
    width: 5px;
    left: 30px;
  }
`

const Nose = styled(Box)`
  width: 15px;
  height: 10px;
  position: absolute;
  top: 53px;
  left: 28px;
  border-radius: 40px;
  background: ${darken(0.06, SKIN)};
`

const Freckles = styled(Flex)`
  width: 75px;
  justify-content: space-between;
  position: absolute;
  top: 50px;
`

const Freckle = styled(Box)`
  width: 5px;
  height: 4px;
  border-radius: 10px;
  background: ${darken(0.3, SKIN)};
  &:nth-child(even) {
    margin-top: 5px;
  }
  &:nth-child(4) {
    margin-left: 5px;
  }
`

const Mouth = styled(Box)`
  width: 25px;
  height: 5px;
  border-radius: 50%;
  border-bottom: 3px solid ${darken(0.1, SKIN)};
  position: absolute;
  top: 70px;
  left: 24px;
`

export const SelfAvatar: React.FC<ConstrainedBoxProps> = ({ mx, my, sx }) => (
  <Wrapper {...{ mx, my, sx }}>
    <HairBack side={LEFT} />
    <HairBack side={RIGHT} />
    <HairTop />
    <Head />
    <Face>
      <Eyebrows>
        <Eyebrow />
        <Eyebrow />
      </Eyebrows>
      <Eyes />
      <Glasses>
        <GlassesLens side={LEFT}>
          <Shine />
        </GlassesLens>
        <GlassesLens side={RIGHT}>
          <Shine />
        </GlassesLens>
      </Glasses>
      <Nose />
      <Freckles>
        {[...Array(FRECKLES_COUNT)].map((freckle, index) => (
          <Freckle key={`${freckle}:${index}`} />
        ))}
      </Freckles>
      <Mouth />
    </Face>
    <Neck />
    <Shirt>
      <ShirtButton />
    </Shirt>
  </Wrapper>
)
