import React, { useState } from 'react'
import styled from 'styled-components'

import { motion } from 'framer-motion'
import { MediaContextProvider, Media } from 'utils/media'

import Link from 'next/link'
import { baseTheme, Box } from 'danni-s-design-system'
import { GoToMainButton } from '..'

const StyledHeader = styled('header')<{ controlsShown?: boolean }>`
  position: relative;
  min-height: ${baseTheme.space.xxl}px;
  text-decoration: none;
  text-transform: capitalize;
`

const ButtonWithMotion = () => {
  const ButtonXDesktop = baseTheme.space.xl
  const ButtonXMobile = baseTheme.space.s
  const ButtonY = baseTheme.space.xxl

  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <Link href="/" passHref>
          <motion.a
            style={{
              textDecoration: 'none',
              height: 'fit-content',
              position: 'absolute',
              zIndex: baseTheme.zIndices.above,
              right: `-${ButtonXDesktop}px`,
              top: `-${ButtonY}px`,
            }}
            layoutId="navButton"
            initial={{ scale: 0.47 }}
            whileHover={{ scale: 0.5 }}
            whileTap={{ scale: 0.5 }}
          >
            <GoToMainButton />
          </motion.a>
        </Link>
      </Media>
      <Media lessThan="tablet">
        <Link href="/" passHref>
          <motion.a
            style={{
              textDecoration: 'none',
              height: 'fit-content',
              position: 'absolute',
              zIndex: baseTheme.zIndices.above,
              right: `${ButtonXMobile}px`,
              top: `-${ButtonY}px`,
            }}
            layoutId="navButton"
            initial={{ scale: 0.47 }}
            whileHover={{ scale: 0.5 }}
            whileTap={{ scale: 0.5 }}
          >
            <GoToMainButton />
          </motion.a>
        </Link>
      </Media>
    </MediaContextProvider>
  )
}

export const Header: React.FC = () => {
  const [controlsShown, toggleControls] = useState(false)

  return (
    <StyledHeader onClick={() => toggleControls(!controlsShown)}>
      <Link href="/" locale="en-GB">
        <a>en-GB</a>
      </Link>
      <Box mr="s" inlineBlock />
      <Link href="/" locale="en-US">
        <a>en-US</a>
      </Link>
      <Box mr="s" inlineBlock />
      <Link href="/" locale="de">
        <a>DE</a>
      </Link>
      <Box mr="s" inlineBlock />
      <Link href="/" locale="ru">
        <a>RU</a>
      </Link>
      <ButtonWithMotion />
    </StyledHeader>
  )
}
