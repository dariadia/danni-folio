import {
  ParaAbilities,
  Personas,
  PersonaWithParaAbilityDescription,
} from 'types'

export const matchByKey = ({
  personas,
  paraAbilities,
}: {
  personas: Personas
  paraAbilities: ParaAbilities
}): PersonaWithParaAbilityDescription[] => {
  return personas.map(({ para_ability, ...rest }) => ({
    para_ability,
    ...rest,
    ...paraAbilities.filter(({ name }) => name === para_ability)[0],
  })) as PersonaWithParaAbilityDescription[]
}
