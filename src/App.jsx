//INFO: main App entry point

import { useState } from 'react'
import './App.css'

import {Button} from 'primereact/button' //PA: from PrimeReact
import {MiCalendar} from './components/micalendar' //PA: copied the example, put the code in this file


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola!</h1>
      <div>
        <Button label={"count is "+count} onClick={() => setCount((count) => count + 1)} />
      </div>
			<MiCalendar />
    </>
  )
}


