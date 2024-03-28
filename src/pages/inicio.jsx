//INFO: pagina inicial

import { useState } from 'react'

import {Button} from 'primereact/button' //PA: from PrimeReact
import {MiCalendar} from '../components/micalendar' //PA: copied the example, put the code in this file
import {MiForm} from '../components/miform';
import {SaludoUsuaria} from '../components/saludo_usuaria';
import {Saludo} from '../components/saludo';

export function PaginaInicio() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1>Hola!</h1>
			<div>
				<Button label={"count is "+count} onClick={() => setCount((count) => count + 1)} />
			</div>
			<MiCalendar />
			<MiForm />
			<SaludoUsuaria />
			<Saludo mensaje="a mi mama," />
			<Saludo mensaje="y a todos los que me estan mirando!" />
			<Button onClick={ () => {window.location.hash='#planilla'} } >Ir a planilla</Button>
		</>
	)
}


