import { ParaAbility } from './ParaAbility'

export interface Persona {
  id: string
  name: string
  para_ability: string
  para_ability_id?: string
}

export type Personas = Persona[]

export interface PersonaWithParaAbilityDescription
  extends ParaAbility,
    Persona {}
