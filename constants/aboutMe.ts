import { Contacts } from 'types'

const BIRTHDAY = '06.06.1997'

export const ABOUT_ME: Contacts = {
  BIRTHDAY: { value: BIRTHDAY, extra: '9:30 am (GMT+4)' },
  AGE: {
    value: new Date().getFullYear() - new Date(BIRTHDAY).getFullYear(),
  },
} as const
