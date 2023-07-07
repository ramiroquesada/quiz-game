import { Preguntas } from './Preguntas';
import { Store } from '../context/Store';

export const Acertijos = () => {
	const { numPregunta } = Store();

	return (
		<div className='container h-100'>
			<div className='d-flex h-100 flex-column justify-content-center gap-4 align-items-center'>
				<Preguntas key={numPregunta} />
			</div>
		</div>
	);
};
