export interface Planets {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: People[]
  films: Films[]
}

export interface People {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: Planets[]
  films: Films[]
  species: []
  vehicles: Vehicles[]
  starships: Starships[]
}

export interface Films {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: People[]
  planets: Planets[]
  starships: Starships[]
  vehicles: Vehicles[]
  species: Species[]
}

export interface Vehicles {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  vehicle_class: string
  pilots: People[] | null
  films: Films[]
}

export interface Starships {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: People[] | null
  films: Films[]
}

export interface Species {
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  homeworld: Planets[]
  language: string
  people: People[]
  films: Films
}
