import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MediaContextProvider, Media } from 'utils/media'

import {
  Flex,
  Box,
  Text,
  baseTheme,
  HeadingH2,
  HeadingH3,
  List,
  ThemeType,
  Details,
  HoverableText,
  Link,
} from 'danni-s-design-system'
import { MainLayout } from '@/components/layouts'
import { Avatar } from '@/components'

import { ABOUT_ME } from 'constants/aboutMe'
import { DATE_OPTIONS } from 'constants/dates'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const AboutPage: Page<SinglePageProps> = ({ locale }) => {
  const { t } = useTranslation(['common', 'about'])

  const theme = useContext(ThemeContext) as ThemeType

  const delayHeading = baseTheme.durations.s / 1000
  const delayPixelMeImage = baseTheme.durations.xl / 1000
  const delayContents = baseTheme.durations.l / 1000

  return (
    <>
      <Box pl="s" pr="xxl" py="m" elevation="low">
        <Flex
          height="80vh"
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <motion.div
            className="contactsHeading"
            layoutId="contactsHeading"
            style={{ width: 'fit-content', margin: 'auto' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delayHeading }}
          >
            <MediaContextProvider>
              <Media greaterThanOrEqual="tablet">
                <HeadingH2
                  as="h1"
                  kind="serif"
                  m="auto"
                  px="l"
                  color="accentDark"
                  width="fit-content"
                  sx={{
                    textTransform: 'capitalize',
                    borderBottom: `2px solid ${theme.colours.complementaryDark}`,
                  }}
                >
                  {t('common:about')}
                </HeadingH2>
              </Media>
              <Media lessThan="tablet">
                <HeadingH3
                  as="h1"
                  kind="serif"
                  ml="m"
                  px="s"
                  color="accentDark"
                  sx={{
                    textTransform: 'capitalize',
                    borderBottom: `2px solid ${theme.colours.complementaryDark}`,
                  }}
                >
                  {t('common:about')}
                </HeadingH3>
              </Media>
            </MediaContextProvider>
            <motion.div
              className="pixelMe"
              layoutId="pixelMe"
              style={{
                width: 'fit-content',
                margin: `${baseTheme.space.xxxl}px auto`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delayPixelMeImage }}
            >
              <img
                height={`${baseTheme.space.elephant}px`}
                src="/assets/pixel-me.png"
                alt={t('about:image')}
              />
            </motion.div>
          </motion.div>
        </Flex>
      </Box>
      <Box
        as="section"
        p="xxxl"
        sx={{
          boxShadow: baseTheme.shadows.low,
        }}
      >
        <motion.div
          className="contactsContent"
          layoutId="contactsContent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: baseTheme.space.s }}
          transition={{ delay: delayContents }}
        >
          <List>
            <Details
              withMarker={{ closed: '🧑🏽‍💻', open: '🦹🏽' }}
              summary={
                <HoverableText inlineBlock>
                  <HeadingH3
                    sx={{
                      textTransform: 'uppercase',
                      fontSize: `${baseTheme.space.xl}px`,
                    }}
                  >
                    {t('about:professional')}
                  </HeadingH3>
                </HoverableText>
              }
            >
              {locale && <ProfessionalDetails locale={locale} />}
            </Details>
            <Box mb="xxl" />
            <Details
              withMarker={{ closed: '👩🏽‍🦰', open: '🧘🏽' }}
              summary={
                <HoverableText inlineBlock>
                  <HeadingH3
                    sx={{
                      textTransform: 'uppercase',
                      fontSize: `${baseTheme.space.xl}px`,
                    }}
                  >
                    {t('about:personal')}
                  </HeadingH3>
                </HoverableText>
              }
            >
              {locale && <PersonalDetails locale={locale} />}
            </Details>
          </List>
        </motion.div>
      </Box>
    </>
  )
}

const ProfessionalDetails = ({ locale }: { locale: Locale }) => {
  const { t } = useTranslation(['common', 'about', 'locations', 'languages'])

  const EDUCATION = ABOUT_ME.EDUCATION

  return (
    <Box p="m" mb="xl">
      <Avatar mx="auto" mb="l" size="elephant">
        <img src="assets/photo-me.png" alt={t('about:photo')} />
      </Avatar>
      <Text
        bg="complementaryDark"
        mb="s"
        sx={{ textTransform: 'capitalize', textAlign: 'center' }}
        as="h4"
      >
        {t('about:career')}
      </Text>
      <Flex flexDirection="column-reverse">
        {ABOUT_ME.CARRER.map(job => {
          const { translationKey, start, finish } = job
          return (
            <Flex key={translationKey} my="s" justifyContent="space-between">
              <Text sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                {t(`about:${translationKey}`)}
              </Text>
              <Text ml="xl" textAlign="right">
                {new Date(start).toLocaleDateString(locale)}–
                {finish ? (
                  new Date(finish).toLocaleDateString(locale)
                ) : (
                  <Text color="accentDark" fontWeight="bold" inlineBlock>
                    {t(`common:now`)}
                  </Text>
                )}
              </Text>
            </Flex>
          )
        })}
      </Flex>
      <Text
        mt="l"
        mb="s"
        bg="complementaryDark"
        sx={{ textTransform: 'capitalize', textAlign: 'center' }}
        as="h4"
      >
        {t('about:education')}
      </Text>
      <Flex flexDirection="column-reverse">
        <EducationItem
          {...{
            name: `${t(`about:${EDUCATION.SCHOOL.translationKey}`)} ${
              EDUCATION.SCHOOL.value
            }`,
            locale,
            start: EDUCATION.SCHOOL.start,
            finish: EDUCATION.SCHOOL.finish,
            location: `${t(`locations:${EDUCATION.SCHOOL.locationKey}`)}, ${t(
              `locations:${EDUCATION.SCHOOL.countryKey}`,
            )}`,
          }}
        />
        <EducationItem
          {...{
            name: t(`about:${EDUCATION.UNIVERSITY.translationKey}`),
            locale,
            start: EDUCATION.UNIVERSITY.start,
            finish: EDUCATION.UNIVERSITY.finish,
            link: EDUCATION.UNIVERSITY.link,
            location: `${t(
              `locations:${EDUCATION.UNIVERSITY.locationKey}`,
            )}, ${t(`locations:${EDUCATION.UNIVERSITY.countryKey}`)}`,
          }}
        />
        <EducationItem
          {...{
            name: EDUCATION.FURTHER_EDUCATION.value,
            locale,
            start: EDUCATION.FURTHER_EDUCATION.start,
            finish: EDUCATION.FURTHER_EDUCATION.finish,
            link: EDUCATION.FURTHER_EDUCATION.link,
            location: 'online',
          }}
        />
      </Flex>
      <Box mt="l" mb="s" bg="complementaryDark" height="0.5rem" />
    </Box>
  )
}

const EducationItem = ({
  name,
  locale,
  start,
  finish,
  link,
  location,
}: {
  name: string
  locale: Locale
  start: string
  finish: string
  link?: string
  location?: string
}) => (
  <Flex my="s" justifyContent="space-between">
    <Box>
      {link ? (
        <Link
          href={link}
          sx={{ textDecoration: 'none', fontWeight: 'bold' }}
          inlineBlock
        >
          <HoverableText>{name}</HoverableText>
        </Link>
      ) : (
        <Text sx={{ fontWeight: 'bold' }} inlineBlock>
          {name}
        </Text>
      )}
      {location && <Text>{location}</Text>}
    </Box>
    <Text ml="xl" textAlign="right">
      {new Date(start).toLocaleDateString(locale, DATE_OPTIONS.MONTH_YEAR)}–
      {new Date(finish).toLocaleDateString(locale, DATE_OPTIONS.MONTH_YEAR)}
    </Text>
  </Flex>
)

const PersonalDetails = ({ locale }: { locale: Locale }) => {
  const { t } = useTranslation(['about', 'locations'])
  return (
    <Box p="m">
      <Avatar mx="auto" size="elephant">
        <img src="assets/photo-me-yoga.png" alt={t('about:photo')} />
      </Avatar>
      <Text>{locale}</Text>
    </Box>
  )
}

AboutPage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: SinglePageProps }> {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, [
        'common',
        'about',
        'locations',
        'languages',
      ])),
    },
  }
}

export default AboutPage
