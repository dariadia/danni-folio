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

import { ABOUT_ME, SKILLS } from 'constants/aboutMe'
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
          minHeight="70vh"
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
        py="xxxl"
        px="xl"
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
              withMarker={{ closed: '👋🏽', open: '🙌🏽' }}
              summary={
                <HoverableText inlineBlock>
                  <HeadingH3
                    sx={{
                      textTransform: 'uppercase',
                      fontSize: `${baseTheme.space.xl}px`,
                    }}
                  >
                    {t('about:skills')}
                  </HeadingH3>
                </HoverableText>
              }
            >
              <SkillsDetails />
            </Details>
            <Box mb="xxl" />
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
              <PersonalDetails />
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
      <HeadingInBox text={t('about:career')} textTransform />
      <List display="flex" sx={{ flexDirection: 'column-reverse' }}>
        {ABOUT_ME.CAREER.map(job => {
          const { translationKey, start, finish, company, link } = job
          return (
            <Flex key={translationKey} my="s" justifyContent="space-between">
              <Text sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                {t(`about:${translationKey}`)}
                {link ? (
                  <Link href={link} target="_blank">
                    <HoverableText color="complementaryDark">
                      {company}
                    </HoverableText>
                  </Link>
                ) : (
                  <Text>{company}</Text>
                )}
              </Text>
              <Text ml="xl" textAlign="right">
                {new Date(start).toLocaleDateString(locale)}–
                {finish ? (
                  new Date(finish).toLocaleDateString(locale)
                ) : (
                  <Text color="complementaryDark" fontWeight="bold" inlineBlock>
                    {t(`common:now`)}
                  </Text>
                )}
              </Text>
            </Flex>
          )
        })}
      </List>
      <Box mb="m" />
      <HeadingInBox text={t('about:education')} textTransform />
      <List display="flex" sx={{ flexDirection: 'column-reverse' }}>
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
            name: EDUCATION.FURTHER_EDUCATION.value as string,
            locale,
            start: EDUCATION.FURTHER_EDUCATION.start,
            finish: EDUCATION.FURTHER_EDUCATION.finish,
            link: EDUCATION.FURTHER_EDUCATION.link,
            location: 'online',
          }}
        />
      </List>
      <BottomDivider />
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
  finish?: string
  link?: string
  location?: string
}) => (
  <Flex my="s" justifyContent="space-between">
    <Box>
      {link ? (
        <Link
          target="_blank"
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
      {location && (
        <Text sx={{ fontWeight: 'bold' }} color="complementaryDark">
          {location}
        </Text>
      )}
    </Box>
    <Text ml="xl" textAlign="right">
      {new Date(start).toLocaleDateString(locale, DATE_OPTIONS.MONTH_YEAR)}–
      {finish &&
        new Date(finish).toLocaleDateString(locale, DATE_OPTIONS.MONTH_YEAR)}
    </Text>
  </Flex>
)

const PersonalDetails = () => {
  const { t } = useTranslation(['about'])
  return (
    <Box sx={{ textAlign: 'center' }} p="m">
      <Avatar mx="auto" size="elephant">
        <img src="assets/photo-me-yoga.png" alt={t('about:photo')} />
      </Avatar>
      <BottomDivider />
      <List
        liSx={{
          marginTop: `${baseTheme.space.m}px`,
          marginBottom: `${baseTheme.space.m}px`,
        }}
      >
        <Text>
          <Text
            color="complementaryDark"
            fontWeight="bold"
            mr="s"
            sx={{ textTransform: 'capitalize' }}
            inlineBlock
          >
            {t('birthday')}:
          </Text>
          <Text mr="s" inlineBlock>
            {ABOUT_ME.BIRTHDAY.value}:
          </Text>
          <Text inlineBlock>{ABOUT_ME.BIRTHDAY.extra}</Text>
        </Text>
        <Text fontWeight="bold">
          <Text mr="s" inlineBlock>
            {ABOUT_ME.AGE.value}
          </Text>
          <Text inlineBlock>{t('years_old')}</Text>
        </Text>
        <Text pb="m">
          <Text mr="s" color="complementaryDark" inlineBlock>
            <Text my="s" mr="s" fontWeight="bold">
              ☀️{t(ABOUT_ME.ZODIAC.value as string)}
            </Text>
            <Text my="s" mr="s" fontWeight="bold">
              🌙 {t(ABOUT_ME.ZODIAC.value as string)}
            </Text>
            <Text mr="xs" fontWeight="bold" inlineBlock>
              AC {t(ABOUT_ME.ZODIAC.extra as string)}
            </Text>
          </Text>
        </Text>
        {ABOUT_ME.PERSONAL.map(fact => {
          const { link, translationKey, emoji } = fact
          return link ? (
            <Link href={link} target="_blank" my="s" key={translationKey}>
              <HoverableText>
                {t(translationKey as string)} {emoji}
              </HoverableText>
            </Link>
          ) : (
            <Text my="s" key={translationKey}>
              {t(translationKey as string)} {emoji}
            </Text>
          )
        })}
        <Text
          color="complementaryDark"
          sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
          pt="m"
        >
          {t('hobbies')}
        </Text>
        {ABOUT_ME.HOBBIES.map(hobby => (
          <Text my="s" key={hobby.translationKey}>
            {hobby.emoji}
            {t(hobby.translationKey as string)}
          </Text>
        ))}
      </List>
      <BottomDivider />
    </Box>
  )
}

const BottomDivider: React.FC = () => (
  <Box mt="l" mb="s" bg="complementaryDark" height="0.5rem" />
)

const SkillsDetails = () => {
  const { t } = useTranslation(['about', 'languages'])
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <Box p="m">
          <HeadingInBox text={t('about:technical')} textTransform />
          <List
            display="grid"
            sx={{
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridColumnGap: `${baseTheme.space.xl}px`,
              gridRowGap: `${baseTheme.space.s}px`,
            }}
          >
            {getAllSkills()}
          </List>
          <Box mb="m" />
          <HeadingInBox text={t('about:languages')} />
          <LanguagesList />
          <BottomDivider />
        </Box>
      </Media>
      <Media lessThan="tablet">
        <Box py="m">
          <HeadingInBox text={t('about:technical')} textTransform />
          <List
            display="grid"
            sx={{
              gridTemplateColumns: '1fr',

              gridRowGap: `${baseTheme.space.s}px`,
            }}
          >
            {getAllSkills()}
          </List>
        </Box>
        <Box mb="m" />
        <HeadingInBox text={t('about:languages')} />
        <LanguagesList />
        <BottomDivider />
      </Media>
    </MediaContextProvider>
  )
}

const LanguagesList = () => {
  const { t } = useTranslation(['about', 'languages'])
  return (
    <List>
      {ABOUT_ME.LANGUAGES.map(language => (
        <Text my="m" mx="auto" key={language.translationKey}>
          {language.emoji}{' '}
          <Text mr="s" fontWeight="bold" inlineBlock>
            {t(`languages:${language.translationKey}`)}
          </Text>
          {language.level ? (
            <>
              <Text
                mr="s"
                fontWeight="bold"
                color="complementaryDark"
                inlineBlock
              >
                {language.level}
              </Text>
              <Text mr="m" inlineBlock>
                {t(`about:${language.levelKey}`)}
              </Text>
            </>
          ) : (
            <Text fontWeight="bold" color="complementaryDark" inlineBlock>
              {t(`about:${language.levelKey}`)}
            </Text>
          )}
        </Text>
      ))}
    </List>
  )
}

const getAllSkills = () => {
  const skillNodesArray = []

  for (const skill in SKILLS) {
    const skillVariants = SKILLS[skill].variants
    skillNodesArray.push(
      <Box px="l" key={skill} my="m">
        <Text color="complementaryDark" fontWeight="bold" inlineBlock>
          {skill}
        </Text>
        <List>
          {skillVariants.map(variant => {
            const { name, link } = variant
            return (
              <Text my="s" key={name}>
                {SKILLS[skill].emoji}{' '}
                {link ? (
                  <Link href={link} target="_blank" inlineBlock>
                    <HoverableText>{name}</HoverableText>
                  </Link>
                ) : (
                  <Text inlineBlock>{name}</Text>
                )}
              </Text>
            )
          })}
        </List>
      </Box>,
    )
  }

  return skillNodesArray
}

const HeadingInBox = ({
  text,
  textTransform,
}: {
  text: string
  textTransform?: boolean
}) => (
  <Text
    bg="complementaryDark"
    mb="s"
    sx={{
      textTransform: textTransform ? 'capitalize' : 'none',
      textAlign: 'center',
    }}
    as="h4"
  >
    {text}
  </Text>
)

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
