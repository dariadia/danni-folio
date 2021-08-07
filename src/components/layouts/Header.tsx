import React, { useState } from 'react'
import styled from 'styled-components'

import Link from 'next/link'
import { baseTheme, Box } from 'danni-s-design-system'
import { motion } from 'framer-motion'
import { GoToMainButton } from '..'

const StyledHeader = styled('header')<{ controlsShown?: boolean }>`
  position: relative;
  min-height: ${baseTheme.space.xxl}px;
  text-decoration: none;
  text-transform: capitalize;
`

export const Header: React.FC = () => {
  const [controlsShown, toggleControls] = useState(false)
  const ButtonX = baseTheme.space.xl
  const ButtonY = baseTheme.space.xxl

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
      <Link href="/" passHref>
        <motion.a
          style={{
            textDecoration: 'none',
            height: 'fit-content',
            position: 'absolute',
            zIndex: baseTheme.zIndices.above,
            right: `-${ButtonX}px`,
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
    </StyledHeader>
  )
}
