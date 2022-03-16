import { Contacts } from 'types'

export const CONTACTS: Contacts = {
  GITHUB: {
    link: 'https://github.com/dariadia/',
    value: 'dariadia',
    emoji: '💻',
  },
  TELEGRAM: { value: '@dariadia', link: 'https://t.me/dariadia', emoji: '📬' },
  LEETCODE: {
    link: 'https://leetcode.com/mxdanni/',
    value: 'mxdanni',
    emoji: '🧮',
  },
  PHONE_NUMBER: {
    translationKey: 'phone_number',
    value: '+7 917 168 1854',
    emoji: '📞',
  },
  EMAIL: {
    translationKey: 'email',
    link: 'mailto:daria.diachkova@mail.ru',
    value: 'daria.diachkova@mail.ru',
    emoji: '📧',
  },
  PORTFOLIO: {
    link: 'https://danni-s-folio.vercel.app/',
    value: `Danni's Folio`,
    hintKey: 'you_are_here',
  },
  WORK_AWAY: {
    translationKey: 'workaway',
    link: 'https://www.workaway.info/en/account/workawayer',
    value: 'workawayer Danni 👩🏽‍🦰',
    emoji: '🎒',
  },
  INSTAGRAM: {
    link: 'https://www.instagram.com/witchonthebummel/',
    value: 'witchonthebummel',
    emoji: '🏞',
  },
  VK: { link: 'https://vk.com/dariadia/', value: 'dariadia', emoji: '👋🏽' },
  LINKEDIN: {
    link: 'https://www.linkedin.com/in/dariadiachkova/',
    value: 'dariadiachkova',
    emoji: '🧑‍🏫',
  },
} as const
