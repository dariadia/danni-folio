import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Trans, useTranslation } from 'next-i18next'

import {
  baseTheme,
  Box,
  HeadingH3,
  Text,
  List,
  Link,
  HoverableText,
  ThemeType,
  Colour,
  Button,
} from 'danni-s-design-system'

import {
  ABOUT_ME,
  BOOKMATE_ACCOUNT_DATE,
  CURRENT_YEAR,
  JOB_CARD,
  JOB_DESCRIPTION,
  JOB_DUTIES,
  JOB_PROJECTS,
} from 'constants/aboutMe'

import type { Locale, Project } from 'types'

type JobDescriptionCardProps = {
  isJobPopupShown: {
    customerSupport: boolean
    frontendDeveloper: boolean
  }
  locale: Locale
}

export const JobDescriptionCard: React.FC<JobDescriptionCardProps> = ({
  isJobPopupShown,
  locale,
}) => {
  const { t } = useTranslation('about')

  return (
    <Box as="section">
      <Button aria-label={t('return')} id={JOB_CARD} p="s" mb="m">
        ⇚ {t('return')}
      </Button>
      <Box as="article" mb="xxxl" pr="m">
        <HeadingH3 mb="s" color="accentDark" kind="serif">
          {ABOUT_ME.CAREER[0].company}
        </HeadingH3>
        <Trans
          i18nKey="about:bookmate_is"
          components={{
            green: <Text color="complementaryDark" bold inlineBlock />,
          }}
        />
      </Box>
      {isJobPopupShown.frontendDeveloper ? (
        <FrontendDescription locale={locale} />
      ) : (
        <CustomerSupportDescription locale={locale} />
      )}
      <Box mt="xxxl" as="article">
        <Text bold mr="xs" inlineBlock>
          P.s.
        </Text>
        <Trans
          i18nKey="about:my_account"
          components={{
            italic: <i />,
          }}
        />
        <Text color="accentDark" bold ml="xs" inlineBlock>
          {CURRENT_YEAR - BOOKMATE_ACCOUNT_DATE.getFullYear()} {t('years_old')}{' '}
          😲
        </Text>
      </Box>
    </Box>
  )
}

type JobProps = {
  locale: Locale
}

const CustomerSupportDescription: React.FC<JobProps> = ({ locale }) => {
  const { t } = useTranslation('about')
  const { translationKey, start, finish } = ABOUT_ME.CAREER[0]

  return (
    <Box as="article">
      <HeadingH3
        id={JOB_DESCRIPTION}
        mb="s"
        sx={{
          textTransform: 'capitalize',
          fontSize: `${baseTheme.space.xl}px`,
        }}
        as="h4"
      >
        {t(translationKey as string)}
      </HeadingH3>
      <Text bold color="complementaryDark">
        {new Date(start).toLocaleDateString(locale)}–
        {finish ? (
          new Date(finish).toLocaleDateString(locale)
        ) : (
          <Text color="complementaryDark" bold inlineBlock>
            {t(`common:now`)}
          </Text>
        )}
      </Text>
      <HeadingH3
        mt="m"
        mb="s"
        sx={{
          fontSize: `${baseTheme.space.l}px`,
        }}
        as="h5"
      >
        ⚙️ {t('responsibilities_past')}
      </HeadingH3>
      <List
        id={JOB_DUTIES}
        liSx={{
          marginLeft: `${baseTheme.space.m}px`,
          marginBottom: `${baseTheme.space.s}px`,
        }}
      >
        {CUSTOMER_SUPPORT_DUTIES.map(key => (
          <Text key={key}>
            👩🏽‍💻{' '}
            <Trans
              i18nKey={`about:${key}`}
              components={{
                green: <Text color="complementaryDark" bold inlineBlock />,
              }}
            />
          </Text>
        ))}
      </List>
      <HeadingH3
        mt="l"
        mb="s"
        sx={{
          fontSize: `${baseTheme.space.l}px`,
        }}
        as="h5"
      >
        💡 {t('whats_more')}
      </HeadingH3>
      <Text mb="m">{t('not_have_to')} 🤷🏽</Text>
      <List
        liSx={{
          marginLeft: `${baseTheme.space.m}px`,
          marginBottom: `${baseTheme.space.s}px`,
        }}
      >
        <Text>
          🔖{' '}
          <Trans
            i18nKey="about:advise"
            components={{
              green: (
                <Text
                  color="complementaryDark"
                  bold
                  fontStyle="italic"
                  inlineBlock
                />
              ),
            }}
          />
        </Text>
        <Text>
          🧑‍🏫{' '}
          <Trans
            i18nKey="about:use_app"
            components={{
              green: <Text color="complementaryDark" bold inlineBlock />,
            }}
          />
        </Text>
      </List>
    </Box>
  )
}

const CUSTOMER_SUPPORT_DUTIES = [
  'lead_correspondence',
  'fix_minor',
  'reproduce',
  'report',
  'document',
  'assist',
]

const FrontendDescription: React.FC<JobProps> = ({ locale }) => {
  const { t } = useTranslation('about')
  const theme = useContext(ThemeContext) as ThemeType

  const { translationKey, finish } = ABOUT_ME.CAREER[2]
  const { start } = ABOUT_ME.CAREER[1]

  return (
    <Box as="article">
      <HeadingH3
        id={JOB_DESCRIPTION}
        mb="s"
        sx={{
          textTransform: 'capitalize',
          fontSize: `${baseTheme.space.xl}px`,
        }}
        as="h4"
      >
        {t(translationKey as string)}
      </HeadingH3>
      <Text bold color="complementaryDark">
        {new Date(start).toLocaleDateString(locale)}–
        {finish ? (
          new Date(finish).toLocaleDateString(locale)
        ) : (
          <Text color="complementaryDark" bold inlineBlock>
            {t(`common:now`)}
          </Text>
        )}
      </Text>
      <HeadingH3
        mt="m"
        mb="s"
        sx={{
          fontSize: `${baseTheme.space.l}px`,
        }}
        as="h5"
      >
        ⚙️ {t('responsibilities_present')}
      </HeadingH3>
      <HeadingH3
        mt="l"
        mb="s"
        p="s"
        sx={{
          fontSize: `${baseTheme.space.l}px`,
          borderBottom: `1px dashed ${theme.colours.accentDark}`,
          borderTop: `1px dashed ${theme.colours.accentDark}`,
        }}
        as="h6"
      >
        🎤 {t('solo_projects')}
      </HeadingH3>
      <List
        id={JOB_DUTIES}
        liSx={{
          marginLeft: `${baseTheme.space.xl}px`,
          marginBottom: `${baseTheme.space.s}px`,
        }}
      >
        {JOB_PROJECTS.SOLO.map(project => (
          <ProjectInformation
            key={project.name}
            {...{
              project,
              locale,
              accentDark: theme.colours.accentDark as Colour,
            }}
          />
        ))}
      </List>
      <Box mt="xxxl" mx="auto" textAlign="center">
        🍀 🍀 🍀
      </Box>
      <HeadingH3
        mt="xxxl"
        mb="s"
        p="s"
        sx={{
          fontSize: `${baseTheme.space.l}px`,
          borderBottom: `1px dashed ${theme.colours.accentDark}`,
          borderTop: `1px dashed ${theme.colours.accentDark}`,
        }}
        as="h6"
      >
        🎳 {t('team_projects')}
      </HeadingH3>
      <List
        liSx={{
          marginLeft: `${baseTheme.space.xl}px`,
          marginBottom: `${baseTheme.space.s}px`,
        }}
      >
        {JOB_PROJECTS.TEAM.map(project => (
          <ProjectInformation
            key={project.name}
            {...{
              project,
              locale,
              accentDark: theme.colours.accentDark as Colour,
            }}
          />
        ))}
      </List>
    </Box>
  )
}

type ProjectProps = {
  project: Project
  locale: Locale
  accentDark: Colour
}

const ProjectInformation = ({ project, locale, accentDark }: ProjectProps) => {
  const { t } = useTranslation('about')

  const {
    emoji,
    name,
    link,
    stack,
    created,
    creator,
    whatIDo,
    proudOf,
  } = project

  return (
    <Box my="m" pr="xl" pb="m" sx={{ borderBottom: `1px solid ${accentDark}` }}>
      {link ? (
        <Link mb="xs" href={link} target="_blank">
          <HoverableText
            bold
            color="accentDark"
            activeColour="complementaryDark"
          >
            {emoji} {name}
          </HoverableText>
        </Link>
      ) : (
        <Text mb="xs" bold>
          {emoji} {name}
        </Text>
      )}
      <Text mb="xs">{stack.join(', ')}</Text>
      {created && (
        <Text>
          <Text mr="s" bold inlineBlock>
            {t('created')}
            {creator && ` (${t('by_me')})`}:
          </Text>
          {new Date(created).toLocaleDateString(locale)}
        </Text>
      )}
      {(whatIDo || creator) && (
        <>
          <HeadingH3
            mt="m"
            mb="s"
            sx={{
              fontSize: `${baseTheme.space.m}px`,
            }}
            as="h6"
          >
            👋🏽 {t('responsibilities_present')}
          </HeadingH3>
          {whatIDo && (
            <List>
              {whatIDo.map(duty => (
                <Text key={duty} my="xs">
                  <Trans
                    i18nKey={`about:${duty}`}
                    components={{
                      green: (
                        <Text color="complementaryDark" bold inlineBlock />
                      ),
                    }}
                  />
                </Text>
              ))}
            </List>
          )}
          {creator && (
            <Text color="complementaryDark" my="xs" bold>
              {t('everything_from_scratch')}
            </Text>
          )}
        </>
      )}
      {proudOf && (
        <>
          <HeadingH3
            mt="m"
            mb="s"
            sx={{
              fontSize: `${baseTheme.space.m}px`,
            }}
            as="h6"
          >
            🎉 {t('proud_of')}
          </HeadingH3>
          <List>
            {proudOf.map(achievement => (
              <Text key={achievement} my="xs">
                <Trans
                  i18nKey={`about:${achievement}`}
                  components={{
                    green: <Text color="complementaryDark" bold inlineBlock />,
                  }}
                />
              </Text>
            ))}
          </List>
        </>
      )}
    </Box>
  )
}
