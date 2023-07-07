/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Acertijos } from './components/Acertijos';
import { Store } from './context/Store';
import './App.css';

function App() {
	const { setNumPregFromLS } = Store();

	useEffect(() => {
		const pregLS = localStorage.getItem('numPreg');
		if (pregLS) {
			setNumPregFromLS(Number(pregLS));
		} else if (pregLS == null) {
			localStorage.setItem('numPreg', 0);
			setNumPregFromLS(0);
		}
	}, []);

	return (
		<>
			<div className='appContainer'>
				<Acertijos />
			</div>
		</>
	);
}

export default App;
