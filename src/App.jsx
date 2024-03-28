//INFO: main App entry point

import { useState } from 'react'
import {memoriaLeerCon, memoriaLectorPara} from './rte/es';
import './App.css'

import { PaginaInicio } from './pages/inicio';
import { PaginaAPIPlanilla } from './pages/api-planilla';

const hashApagina= {
	'#planilla': PaginaAPIPlanilla,
}

const memoriaLeerHashEnUrl= memoriaLectorPara(["navigation_location{hash"]); //U: leer de Redux, debe estar fuera del componente! //XXX:mover a RTE para que sea mas facil, esconde Redux

export function App() {
	const [hashEnUrl]= memoriaLeerCon( memoriaLeerHashEnUrl );
	const QuePagina= hashApagina[hashEnUrl] || PaginaInicio; //A: si tengo para ese nombre en diccionario uso, sino PaginaInicio
	return (
		<>
			<QuePagina />
		</>
	)
}


