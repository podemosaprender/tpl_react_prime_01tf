import React from 'react';

export function JsonPre({datos, titulo}) {
	return (<div>
		{ titulo ? <h2>{titulo}</h2> : null }
		<pre>{ JSON.stringify(datos, null,1) }</pre>
	</div>)
}


