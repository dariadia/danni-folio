export interface ParaAbility {
  id: string
  name: string
  description: string
  kind: 'physical' | 'mental'
  behaviour_patterns?: string[]
  advice?: string[]
  advice_web?: string[]
}

export type ParaAbilities = ParaAbility[]
