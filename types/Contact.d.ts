export interface Contact {
  translationKey?: string
  value?: string | number
  extra?: string
  link?: string
  hintKey?: string
}

export interface Contacts {
  [key: string]: Contact
}
