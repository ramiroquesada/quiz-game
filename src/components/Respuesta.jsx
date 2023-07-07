/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Store } from '../context/Store';

export const Respuesta = ({ data }) => {
	const { numPregunta, prizeTrue, isLoading, loadingTrue, loadingFalse } =
		Store();

	const [btnDis, setbtnDis] = useState(false);

	const { ok, resp1 } = data;

	const nextQuestion = (e) => {
		e.target.style = 'background-color: green';

		if (numPregunta < 4) {
			setTimeout(() => {
				loadingFalse();
				prizeTrue();
			}, 750);
		}
	};

	const wrongAnwser = (e) => {
		loadingFalse();
		setbtnDis(true);
		e.target.style = 'background-color: red';
	};

	const checkResp = (e) => {
		loadingTrue();

		const data = e.target.getAttribute('data');

		data == 'ok' ? nextQuestion(e) : wrongAnwser(e);
	};

	return (
		<>
			<button
				className='respBtn rounded-3 p-2 w-50'
				disabled={isLoading || btnDis}
				data={ok}
				onClick={checkResp}>
				{resp1}
			</button>
		</>
	);
};
