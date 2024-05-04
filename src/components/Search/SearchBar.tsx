import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from 'src/store/searchResultSlice';
import search from '@assets/search.png';
import c from './Search.module.css';

function SearchBar() {
	const dispatch = useDispatch();
	const [localSearchTerm, setLocalSearchTerm] = useState('');
	const [error, setError] = useState('');

	let timerId: NodeJS.Timeout;

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLocalSearchTerm(event.target.value);
	};

	const handleSearchSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			const regex = /^[a-zA-Z\s]*$/;
			if (!regex.test(localSearchTerm)) {
				setError('Пожалуйста, используйте только латинские буквы');
				return;
			}
			dispatch(setSearchTerm(localSearchTerm));
			setError('');
			console.log('Поиск выполнен:', localSearchTerm); // Проверка дебаунса
		}, 1000);
	};

	return (
		<form className={c.searchBar} onSubmit={handleSearchSubmit}>
			<input
				type="text"
				placeholder="Search Art"
				value={localSearchTerm}
				onChange={handleSearchChange}
			/>
			{error && <p className={c.error}>{error}</p>}{' '}
			<button type="submit">
				<img src={search} alt="search" />
			</button>
		</form>
	);
}

export default SearchBar;
