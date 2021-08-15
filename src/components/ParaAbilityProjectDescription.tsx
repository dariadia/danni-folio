import React from 'react'
import Link from 'next/link'
import {
  HeadingH3,
  List,
  Text,
  Box,
  baseTheme,
  HoverableText,
  Link as ExternalLink,
} from 'danni-s-design-system'
import { PERSONAS_APP_PROJECT } from 'constants/locations'
import { CONTACTS } from 'constants/contacts'

export const ParaAbilityProjectDescription: React.FC = () => (
  <Box p="xxxl" mr="xl">
    <Box mb="xxl" as="article">
      <HeadingH3 mb="s" kind="serif" color="accentDark" as="h1">
        What
      </HeadingH3>
      <Text ml="m">
        👩‍👩‍👧‍👦{' '}
        <Link href={PERSONAS_APP_PROJECT}>
          <HoverableText
            bold
            color="accentDark"
            activeColour="complementaryDark"
            sx={{ textDecoration: 'none' }}
            mr="xs"
            inlineBlock
          >
            Para-ability Personas
          </HoverableText>
        </Link>
        is a project showcased on 🌿
        <Link href="/">
          <HoverableText
            bold
            color="accentDark"
            activeColour="complementaryDark"
            sx={{ textDecoration: 'none' }}
            inlineBlock
          >
            Danni&apos;s Folio
          </HoverableText>
        </Link>{' '}
        alias my personal portfolio.
      </Text>
    </Box>
    <Box mb="xxl" as="article">
      <HeadingH3 mb="s" kind="serif" color="accentDark" as="h2">
        Inspired by:
      </HeadingH3>
      <List
        liSx={{
          marginLeft: `${baseTheme.space.l}px`,
          marginBottom: `${baseTheme.space.s}px`,
        }}
      >
        <Text>
          <ExternalLink
            inlineBlock
            href="https://accessibility.blog.gov.uk/2019/02/11/using-persona-profiles-to-test-accessibility/"
            target="_blank"
          >
            <HoverableText
              bold
              color="accentDark"
              activeColour="complementaryDark"
              sx={{ textDecoration: 'none' }}
              inlineBlock
            >
              this article
            </HoverableText>
          </ExternalLink>{' '}
          on using 🧑‍🦯 persona profiles to test accessibility,
        </Text>
        <Text>
          and{' '}
          <ExternalLink
            inlineBlock
            href="https://www.abilitynet.org.uk/news-blogs/less-1-website-home-pages-are-likely-meet-accessibility-standards"
            target="_blank"
          >
            <HoverableText
              bold
              color="accentDark"
              activeColour="complementaryDark"
              sx={{ textDecoration: 'none' }}
              inlineBlock
            >
              this survey
            </HoverableText>
          </ExternalLink>{' '}
          📊 which found out that less than 1% of website home pages are likely
          to{' '}
          <ExternalLink
            inlineBlock
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
          >
            <HoverableText
              bold
              color="accentDark"
              activeColour="complementaryDark"
              sx={{ textDecoration: 'none' }}
              inlineBlock
            >
              meet accessibility standards,
            </HoverableText>
          </ExternalLink>
        </Text>
        <Text>and my own morals 🦸🏽 ...</Text>
      </List>
      <Text mt="m">
        ⚡️ I set out to create sample profiles on para-abilities for
        web-developers 🧑‍💻 and interested persons 💁.
      </Text>
    </Box>
    <Box mb="xxl" as="article">
      <HeadingH3 mb="s" kind="serif" color="accentDark" as="h2">
        Including 🧑‍🦼
      </HeadingH3>
      <List
        liSx={{
          marginLeft: `${baseTheme.space.l}px`,
          marginBottom: `${baseTheme.space.s}px`,
        }}
      >
        <Text>🩺 short info on the para-ability,</Text>
        <Text>🙋 general advice on how to approach the person,</Text>
        <Text>
          💻 advice for web-developers to improve their site experiences.
        </Text>
      </List>
    </Box>
    <Box mb="xxl" as="article">
      <HeadingH3 mb="s" kind="serif" color="accentDark" as="h2">
        Presenting
      </HeadingH3>
      <List
        liSx={{
          marginLeft: `${baseTheme.space.l}px`,
          marginBottom: `${baseTheme.space.s}px`,
        }}
      >
        <Text>🧏 persons with their own stories 🧑‍🦽</Text>
        <></>
      </List>

      <HeadingH3 mt="xxl" mb="s" kind="serif" color="accentDark" as="h2">
        🙋 Why ⁉️
      </HeadingH3>
      <HeadingH3
        ml="m"
        mb="s"
        color="complementaryDark"
        fontSize={`${baseTheme.space.l}px`}
        as="h3"
      >
        Simply put:
      </HeadingH3>
      <List
        liSx={{
          marginLeft: `${baseTheme.space.l}px`,
          marginBottom: `${baseTheme.space.s}px`,
        }}
      >
        <Text>personas feel real ✨</Text>
        <Text>
          You would meet a person who faces certain barriers. You would get to
          know them, and then receive advice on how to make your own project a
          better place for this person. ⭐️ Imagine your new friend scrolling
          through your pages. Nagivating, taking in the information presented.
          <Text inlineBlock mx="m" bold color="complementaryDark">
            Can they...?
          </Text>
        </Text>
      </List>
    </Box>
    <ExternalLink href={CONTACTS.GITHUB.link} target="_blank" inlineBlock>
      <HoverableText
        bold
        color="accentDark"
        activeColour="complementaryDark"
        sx={{ textDecoration: 'none' }}
        inlineBlock
      >
        @{CONTACTS.GITHUB.value}
      </HoverableText>
    </ExternalLink>
  </Box>
)
