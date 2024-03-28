import { useState, useEffect } from 'react'
import { memoriaPoner, useEstadoYCambio } from '../rte/es';
import { mfetch_tsv } from '../rte/lib/util';

import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {JsonPre} from '../rte/ui/components/JsonPre';

export function MostrarDatosAPIPlanilla({template, urlPlanillaInicial}) {
	const TemplateDato= template || JsonPre; 

	const [urlPlanilla, setUrlPlanilla, cuandoCambiaUrlPlanilla]= useEstadoYCambio(urlPlanillaInicial || '')
	const [quiereVerDatos, setQuiereVerDatos]= useState(urlPlanillaInicial!='');
	const [datosPlanilla, setDatosPlanilla]= useState();
	const [quiereRefrescar, setQuiereRefrescar]= useState(0);

	useEffect( () => {
		if (quiereVerDatos && urlPlanilla!='') {
			mfetch_tsv(urlPlanilla).then( diccionarios => setDatosPlanilla( diccionarios ) );
		} else {
			setDatosPlanilla( null )
		}
	}, [urlPlanilla, quiereVerDatos, quiereRefrescar])

	if (urlPlanilla=='' || !quiereVerDatos) { //A: todavia no se la url o la quiere cambiar, pregunto
		return (<>
			<h1>Pega la url donde compartiste tu planilla</h1>
			<div><InputText placeholder="Url Planilla" value={urlPlanilla} onChange={cuandoCambiaUrlPlanilla} /></div>
			<div><Button onClick={ () => { setQuiereVerDatos(true) } }>Ver Datos</Button></div>
		</>)
	} else {
		if (datosPlanilla!=null) {
			return (<>
				<h1>Datos Planilla</h1>
				{ datosPlanilla.map( (dict, idx) => <TemplateDato key={idx} datos={dict} /> ) }
				<div className='m-2'>
					<Button onClick={ () => { setQuiereVerDatos(false) } }>Volver</Button>
					<Button onClick={ () => { setQuiereRefrescar(quiereRefrescar+1) } }>Refrescar</Button>
				</div>
			</>)
		} else {
			return (<>
				<h1>Aún no tengo datos planilla</h1>
				<div>
					<Button onClick={ () => { setQuiereVerDatos(false) } }>Volver</Button>
				</div>
			</>)
		}
	}
}

