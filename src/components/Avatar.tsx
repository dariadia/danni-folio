import React from 'react'
import styled from 'styled-components'

import { Circle, CircleProps } from 'danni-s-design-system'

export const Avatar: React.FC<CircleProps> = styled(Circle)`
  overflow: hidden;
  user-select: none;
  & > img {
    width: 100%;
    height: 100%;
  }
`
