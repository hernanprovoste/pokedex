import { FC } from 'react'
import { Grid } from '@nextui-org/react'
import { FavoritePokemonCard } from './FavoritePokemonCard'

interface Props {
  pokemons: number[]
}

export const FavoritePokemon: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <FavoritePokemonCard key={pokemon} pokemonId={pokemon} />
      ))}
    </Grid.Container>
  )
}
