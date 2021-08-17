import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MainLayout } from '@/components/layouts'
import { HeadingH3, Text, baseTheme, Box } from 'danni-s-design-system'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const RandomStoryPage: Page<SinglePageProps> = () => (
  <>
    <Box my="xl" as="section" textAlign="center">
      <HeadingH3 as="h1" kind="serif">
        🧑🏻‍🦰 Enter your name to get a story 👨🏾‍🦰
      </HeadingH3>
      <HeadingH3
        color="complementaryDark"
        mt="xs"
        as="h2"
        fontSize={`${baseTheme.space.xl}px`}
      >
        about you going on an epic adventure with an author
      </HeadingH3>
      <Text mt="xs">or enter any text you want and take off 🚀</Text>
    </Box>

    <iframe
      suppressHydrationWarning
      height="700"
      style={{ width: '100%' }}
      scrolling="no"
      title="Plot Generator"
      src="https://codepen.io/dariadia/embed/bGWEzvP?default-tab=result"
      frameBorder="no"
      loading="lazy"
      allowFullScreen
    >
      See the Pen{' '}
      <a href="https://codepen.io/dariadia/pen/bGWEzvP">Plot Generator</a> by
      dariadia (<a href="https://codepen.io/dariadia">@dariadia</a>) on{' '}
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  </>
)

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: SinglePageProps }> {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'languages'])),
    },
  }
}

RandomStoryPage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export default RandomStoryPage
