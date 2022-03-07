import { FC, useState, useEffect } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'
import { FavoritePokemon } from '../../components/pokemon'

const FavoritePage: FC = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout>{favoritePokemons.length === 0 ? <NoFavorites /> : <FavoritePokemon pokemons={favoritePokemons} />}</Layout>
  )
}

export default FavoritePage
