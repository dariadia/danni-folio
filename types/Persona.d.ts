import { ParaAbility } from './ParaAbility'

export interface Persona {
  id: string
  persona_name: string
  para_ability: string
  emoji?: string
}

export type Personas = Persona[]

export interface PersonaWithParaAbilityDescription
  extends ParaAbility,
    Persona {}
