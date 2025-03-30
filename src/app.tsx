import { useEffect, useState } from 'preact/hooks'
import './app.css'
import words from './words.json'

export function App() {

  const [word,setWord] = useState<string>("")

  const getWord = () : string => {
    const n = words.length;
    return words[ Math.floor( Math.random() * n ) ]
  }

  useEffect(() => {
    setWord(getWord())
    window.onkeydown = (e : KeyboardEvent) =>  {
      if (/^[a-zA-Z]$/.test(e.key)) {
        console.log("Alphabet key pressed:", e.key);
      }
    }
  },[])

  return (
    <>
      <div>{word}</div>
    </>
  )
}
