import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MainLayout } from '@/components/layouts'
import {
  HeadingH3,
  Text,
  baseTheme,
  Box,
  Link as ExternalLink,
  HoverableText,
} from 'danni-s-design-system'

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
      <Box mt="xxl" as="article">
        <HeadingH3 mb="s" fontSize={`${baseTheme.space.xl}px`} as="h3">
          on this project:
        </HeadingH3>
        Inspired by{' '}
        <ExternalLink
          inlineBlock
          href="https://dev.to/inhuofficial/what-burger-are-you-enter-your-name-to-find-out-repeatable-random-numbers-seeds-3jhf"
          target="_blank"
        >
          <HoverableText bold color="complementaryDark">
            this article by InHuOfficial
          </HoverableText>
        </ExternalLink>
        <Text>
          the app generates a random seed
          <Box
            width="fit-content"
            p="l"
            mx="auto"
            my="l"
            as="pre"
            sx={{ border: `1px dashed green` }}
          >
            <code>
              seed = (seed * 9301 + 49297) % 233280;
              <br />
              var rnd = seed / 233280;
            </code>
          </Box>
          from your{' '}
          <Text color="complementaryDark" bold inlineBlock>
            code name
          </Text>
          . Which is just your name but every letter is a{' '}
          <Text color="complementaryDark" bold inlineBlock>
            .charCodeAt(x)
          </Text>{' '}
          value.
        </Text>
      </Box>
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
