import Card from "@/components/Card"
import { useEffect, useState } from "react"

const API_URL = "https://rickandmortyapi.com/api/character"

export default function Home() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((response) => {
        const { results } = response
        setCharacters(results)
      })
  }, [])
  return (
    <div className="bg-gray-light flex flex-wrap justify-center align-middle gap-4 md:gap-8 my-12">
      {characters.length === 0 && <p>Loading...</p>}
      {characters.length > 0 &&
        characters.map((character) => (
          <div key={character.id}>
            <Card title={character.name} subtitle={character.species} image={character.image} href="#"/>
          </div>
        ))}
    </div>
  )
}
