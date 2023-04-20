import Card from "@/components/Card"
import { useEffect, useState } from "react"

const API_URL = "https://rickandmortyapi.com/api/character"

export default function Home({ characters }) {

  return (
    <div className="bg-gray-light flex flex-wrap justify-center align-middle gap-4 md:gap-8 my-12">
      {characters.length === 0 && <p>No tenemos personajes</p>}
      {characters.length > 0 &&
        characters.map((character) => (
          <div key={character.id}>
            <Card title={character.name} subtitle={character.species} image={character.image} href="#" />
          </div>
        ))}
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(API_URL)
  const { results } = await response.json()
  return {
    props: {
      characters: results,
    },
  }
}
