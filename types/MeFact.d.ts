export type AboutMe = {
  readonly BIRTHDAY: Date
  readonly AGE: AboutMeFact
  readonly ZODIAC: AboutMeFact
  readonly EDUCATION: {
    [key: string]: AboutMeEvent
  }
  readonly CAREER: readonly Job[]
  readonly GRANTS: AboutMeEvent
  readonly LANGUAGES: readonly Language[]
  readonly PERSONAL: readonly AboutMeFact[]
  readonly HOBBIES: readonly AboutMeFact[]
}

export interface AboutMeFact {
  readonly value?: string | number
  readonly translationKey?: string
  readonly extra?: string
  readonly link?: string
  readonly emoji?: string
}

export interface AboutMeEvent extends AboutMeFact {
  readonly start: string
  readonly finish?: string
  readonly locationKey?: string
  readonly countryKey?: string
  readonly link?: string
}

export interface Job extends AboutMeEvent {
  readonly company: string
}

type Language = {
  readonly translationKey: string
  readonly level?: string
  readonly levelKey: string
  readonly emoji?: string
}

export type Skills = {
  [key: string]: {
    variants: readonly Skill[]
    emoji?: string
  }
}

type Skill = {
  name: string
  link: string
}

export type Project = {
  name: readonly string
  link?: readonly string
  stack: readonly string[]
  created?: readonly string
  creator?: boolean
  whatIDo?: readonly string[]
  proudOf?: readonly string[]
  emoji?: string
}

export type JobProjects = {
  SOLO: readonly Project[]
  TEAM: readonly Project[]
}
