import React, { useState } from 'react'
import styled from 'styled-components'

import Link from 'next/link'
import { Box } from 'danni-s-design-system'

const StyledHeader = styled('header')<{ controlsShown?: boolean }>`
  text-decoration: none;
  text-transform: capitalize;
`

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
    </StyledHeader>
  )
}
