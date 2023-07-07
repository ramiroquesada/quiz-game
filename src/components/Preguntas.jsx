/* eslint-disable react/prop-types */
import { Store } from "../context/Store";
import { Respuesta } from "./Respuesta";

import {data} from '../context/data'

export const Preguntas = () => {

	const {numPregunta} = Store()


	const pregunta = data[numPregunta]
	

	return (
		<>
			<div className='pregunta w-75'>
				<h2 className=''>PREGUNTA {numPregunta}</h2>
				<hr />
				<h5 className='text-secondary'>
					{pregunta.Pregunta}
				</h5>
				<hr />
			</div>

			<div className='respuestas w-50 d-flex flex-column justify-content-center gap-3'>
				{pregunta.Respuestas.map((resp) => (
					<Respuesta key={pregunta.Respuestas.indexOf(resp)} data={resp}/>
				))}
			</div>
		</>
	);
};
