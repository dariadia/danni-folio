const BIRTHDAY = '06.06.1997'

export const ABOUT_ME = {
  BIRTHDAY: { value: BIRTHDAY, extra: '9:30 am (GMT+4)' },
  AGE: {
    value: new Date().getFullYear() - new Date(BIRTHDAY).getFullYear(),
  },
  ZODIAC: { translationKey: 'zodiac' },
  EDUCATION: {
    SCHOOL: {
      translationKey: 'school',
      value: '№120',
      start: '09.01.2004',
      finish: '07.01.2015',
      locationKey: 'samara',
      countryKey: 'russia',
    },
    UNIVERSITY: {
      translationKey: 'HSE',
      link: 'https://www.hse.ru/',
      start: '09.01.2015',
      finish: '07.01.2019',
      locationKey: 'moscow',
      countryKey: 'russia',
    },
    FURTHER_EDUCATION: {
      value: 'GeekBrains: Mail.Ru Group',
      link: 'https://gb.ru',
      translationKey: 'further_education',
      start: '12.15.2018',
      finish: '12.30.2020',
    },
  },
  CARRER: [
    {
      translationKey: 'customer_support',
      start: '06.16.2019',
      finish: '02.25.2020',
    },
    {
      translationKey: 'junior_developer',
      start: '02.25.2020',
      finish: '02.16.2021',
    },
    {
      translationKey: 'developer',
      start: '02.16.2021',
      finish: '',
    },
  ],
  GRANTS: { translationKey: 'presidential_grant' },
  LANGUAGES: { translationKey: 'languages' },
  PERSONAL: { translationKey: 'nonbinary' },
  DRIVING: { translationKey: 'driving_licence' },
} as const
