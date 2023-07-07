/* eslint-disable react/prop-types */
import { Store } from '../context/Store';

export const Premio = ({ preg }) => {
	const { prizeFalse, nextPregunta, numPregunta, setNumPregFromLS } = Store();

	const siguientePregunta = () => {
		nextPregunta();
		localStorage.setItem('numPreg', Number(numPregunta) + 1);
		prizeFalse();
	};

	const restartGame = () => {
		localStorage.setItem('numPreg', 0);
		setNumPregFromLS(0);
		prizeFalse();
	};

	if (numPregunta == 3) {
		return (
			<>
				<div>
					<h2>Felicidades</h2>
					<button onClick={restartGame}>Jugar De Nuevo</button>
				</div>
			</>
		);
	}

	return (
		<div className='d-flex flex-column gap-3'>
			<div>{preg.prize}</div>
			<div>
				<button onClick={siguientePregunta}>Siguiente Pregunta</button>
			</div>
		</div>
	);
};
