import React from 'react'
import { Trans, useTranslation } from 'next-i18next'

import { baseTheme, Box, HeadingH3, Text, List } from 'danni-s-design-system'
import {
  ABOUT_ME,
  BOOKMATE_ACCOUNT_DATE,
  CURRENT_YEAR,
} from 'constants/aboutMe'

import { Locale } from 'types'

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
      <Box as="article" mb="xxxl">
        <HeadingH3 mb="s" color="accentDark" kind="serif">
          {ABOUT_ME.CAREER[0].company}
        </HeadingH3>
        <Trans
          i18nKey="about:bookmate_is"
          components={{
            green: (
              <Text color="complementaryDark" fontWeight="bold" inlineBlock />
            ),
          }}
        />
      </Box>
      {isJobPopupShown.frontendDeveloper ? (
        <FrontendDescription locale={locale} />
      ) : (
        <CustomerSupportDescription locale={locale} />
      )}
      <Box mt="xxxl" as="article">
        <Text fontWeight="bold" mr="xs" inlineBlock>
          P.s.
        </Text>
        <Trans
          i18nKey="about:my_account"
          components={{
            italic: <i />,
          }}
        />
        <Text color="accentDark" fontWeight="bold" ml="xs" inlineBlock>
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
        mb="s"
        sx={{
          textTransform: 'capitalize',
          fontSize: `${baseTheme.space.xl}px`,
        }}
        as="h4"
      >
        {t(translationKey as string)}
      </HeadingH3>
      <Text fontWeight="bold" color="complementaryDark">
        {new Date(start).toLocaleDateString(locale)}–
        {finish ? (
          new Date(finish).toLocaleDateString(locale)
        ) : (
          <Text color="complementaryDark" fontWeight="bold" inlineBlock>
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
        liSx={{
          marginLeft: `${baseTheme.space.m}px`,
          marginBottom: `${baseTheme.space.s}px`,
        }}
      >
        {CUSTOMER_SUPPORT_DUTIES.map((key, index) =>
          index === 0 ? (
            <Text key={key}>
              📩 {t('lead_correspondence')}{' '}
              <i>
                <Text fontWeight="bold" color="complementaryDark" inlineBlock>
                  {t('usually')}
                </Text>{' '}
                {t('bugs')}
              </i>
            </Text>
          ) : (
            <Text key={key}>👩🏽‍💻 {t(key)}</Text>
          ),
        )}
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
                  fontWeight="bold"
                  fontStyle="italic"
                  inlineBlock
                />
              ),
            }}
          />
        </Text>
        <Text>🧑‍🏫 {t('use_app')}</Text>
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
  return (
    <Box as="article">
      {t('use_app')}
      {locale}
    </Box>
  )
}
