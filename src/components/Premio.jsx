/* eslint-disable react/prop-types */
import { Store } from '../context/Store';

export const Premio = ({ preg }) => {
	const { prizeFalse, nextPregunta, numPregunta } = Store();

	const siguientePregunta = () => {
		nextPregunta();
		localStorage.setItem('numPreg', Number(numPregunta) + 1);
		prizeFalse();
	};

	return (
		<div className='d-flex flex-column gap-3'>
			<div>{preg.prize}</div>
			<div>
				<button onClick={siguientePregunta}>Siguiente Pregunta</button>
			</div>
		</div>
	);
};
