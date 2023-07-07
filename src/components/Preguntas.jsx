/* eslint-disable react/prop-types */
import { Store } from '../context/Store';
import { Respuesta } from './Respuesta';

import { data } from '../context/data';
import { Premio } from './Premio';

export const Preguntas = () => {
	const { numPregunta, isPrize } = Store();

	const pregunta = data[numPregunta];

	if (isPrize) {
		return <Premio preg={pregunta} />;
	}

	return (
		<>
			<div className='pregunta w-75 d-flex flex-column align-items-center'>
				<h2 className=''>PREGUNTA {Number(numPregunta) + 1}</h2>
				<hr className='w-100' />
				<h5 className='text-secondary'>{pregunta?.Pregunta}</h5>
				<hr className='w-75' />
			</div>

			<div className='respuestas w-75 d-flex flex-column align-items-center justify-content-center gap-3'>
				{pregunta?.Respuestas.map((resp) => (
					<Respuesta
						key={pregunta.Respuestas.indexOf(resp)}
						data={resp}
					/>
				))}
			</div>
		</>
	);
};
