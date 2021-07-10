import { Planets } from './types'
import { getPlanets } from './api-calls'
import { QueryStatus, useQuery } from 'react-query'

export const usePlanets = (): { planet: Planets[]; status: QueryStatus } => {
  const { data: planet, status } = useQuery('planet', getPlanets)
  return { planet, status }
}
