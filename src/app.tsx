import { useEffect } from 'preact/hooks'
import './app.css'

export function App() {

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
