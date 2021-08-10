const BIRTHDAY = '06.06.1997'

export const ABOUT_ME = {
  BIRTHDAY: { value: BIRTHDAY, extra: '9:30 am (GMT+4)' },
  AGE: {
    value: new Date().getFullYear() - new Date(BIRTHDAY).getFullYear(),
  },
  ZODIAC: { translationKey: 'zodiac' },
  EDUCATION: {
    SCHOOL: { translationKey: 'school', value: '№120' },
    UNIVERSITY: {
      translationKey: 'HSE',
      link: 'https://www.hse.ru/',
    },
    FURTHER_EDUCATION: {
      value: 'GeekBrains: Mail.Ru Group',
      link: 'https://gb.ru',
      translationKey: 'further_education',
    },
  },
  CARRER: [
    {
      translationKey: 'customer_support',
      start: '16.06.2019',
      finish: '25.02.2020',
    },
    {
      translationKey: 'junior_developer',
      start: '25.02.2020',
      finish: '16.02.2021',
    },
    {
      translationKey: 'developer',
      start: '16.02.2021',
    },
  ],
  GRANTS: { translationKey: 'presidential_grant' },
  LANGUAGES: { translationKey: 'languages' },
  PERSONAL: { translationKey: 'nonbinary' },
  DRIVING: { translationKey: 'driving_licence' },
} as const
