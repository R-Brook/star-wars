import axios from 'axios'
import {
  Planets /*, People, Films, Vehicles, Starships, Species*/,
} from './types'

const API_ROUTE = 'https://swapi.dev/api/'

export const getPlanets = async (): Promise<Planets[]> => {
  const { data } = await axios.get(`${API_ROUTE}/planets/?format=api`)
  return data
}
