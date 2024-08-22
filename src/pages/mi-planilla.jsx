//INFO: ejemplo de como traer datos de una planilla de google y mostrarlos como quieras

import { MostrarDatosAPIPlanilla } from '../components/api-planilla';

const UrlMiPlanilla= 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSn85Am7uqKxunOKnnaH5sZAMGNhTUflj5tGZa48MZkq8WulceYofLLLT3OT7XiHroHc4APbNMtG6qa/pub?gid=0&single=true&output=tsv' //U: copiar del cuadrito compartir de GoogleSheets

function MostrarUnProducto({datos}) { //U: adaptar a las columnas de tu planilla y como queres mostrar
	return (<div>
		{datos.Producto}: ${datos.Precio} { datos.EsOferta=='si' ? 'OFERTON' : ''}
	</div>)
}

export function PaginaMiPlanilla() {
	return (<>
		<MostrarDatosAPIPlanilla urlPlanillaInicial={UrlMiPlanilla} template={MostrarUnProducto} />
	</>)
}
