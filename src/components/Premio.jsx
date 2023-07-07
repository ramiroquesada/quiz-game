/* eslint-disable react/prop-types */
import { Store } from '../context/Store';

export const Premio = ({ preg }) => {
	const { nextPregunta, prizeFalse } = Store();

	const siguientePregunta = () => {
		nextPregunta();
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
