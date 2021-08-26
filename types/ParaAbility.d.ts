export interface ParaAbility {
  id: string
  name: string
  description: string
  kind: 'physical' | 'mental'
  behaviour_patterns?: string[]
  advice?: string[]
  advice_web: {
    do: string[]
    do_not: string[]
  }
}

export type ParaAbilities = ParaAbility[]
