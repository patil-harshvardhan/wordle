import { useEffect, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {

  const [word,setWord] = useState<string| null>(null)

  const getWord = async () : Promise<void> => {
    const response = await fetch(
      "https://api.frontendexpert.io/api/fe/wordle-words"
    );
    const json = await response.json();
    console.log(json)
  }

  useEffect(() => {
    getWord()
  },[])

  return (
    <>
      <div>Hello</div>
    </>
  )
}
