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
				<div className='d-flex flex-column gap-5'>
					<h2>Felicidades</h2>
					<button
						className='respBtn restBtn rounded-3 p-3'
						onClick={restartGame}>
						Jugar De Nuevo
					</button>
				</div>
			</>
		);
	}

	return (
		<div className='d-flex flex-column gap-5'>
			<div>{preg.prize}</div>
			<div>
				<button
					className='respBtn p-3 rounded-3  nextBtn'
					onClick={siguientePregunta}>
					Siguiente Pregunta
				</button>
			</div>
		</div>
	);
};
