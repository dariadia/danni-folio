export interface Contact {
  translationKey?: string
  value?: string | number
  extra?: string
  link?: string
  hintKey?: string
  emoji?: string
}

export interface Contacts {
  [key: string]: Contact
}
