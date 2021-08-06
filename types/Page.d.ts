import * as React from 'react'
import { NextPage } from 'next'
import { ThemeType } from 'danni-s-design-system'

export type Page<T> = NextPage<T> & { Layout?: React.FC }

export type Layout = {
  theme?: ThemeType
  userAgentString?: string
}

export interface IndexPage {
  userAgentString?: string
}
