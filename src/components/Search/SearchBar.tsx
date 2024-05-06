import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSortOrder } from 'src/store/searchResultSlice';
import search from '@assets/search.png';
import sort from '@assets/icon-sorting.png';
import c from './Search.module.css';
import { RootState } from 'src/store/store';

function SearchBar() {
	const dispatch = useDispatch();
	const [localSearchTerm, setLocalSearchTerm] = useState('');
	const [error, setError] = useState('');
	const sortOrder = useSelector(
		(state: RootState) => state.searchResult.sortOrder,
	);

	let timerId: NodeJS.Timeout;

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLocalSearchTerm(event.target.value);
	};

	const handleSearchSubmit = (event?: React.FormEvent) => {
		event?.preventDefault();
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			const regex = /^[a-zA-Z\s]*$/;
			if (!regex.test(localSearchTerm)) {
				setError('Please use Latin letters only');
				return;
			}
			dispatch(setSearchTerm(localSearchTerm));
			dispatch(setSortOrder(sortOrder));
			setError('');
			console.log('Поиск выполнен:', localSearchTerm); // Проверка дебаунса
		}, 1000);
	};

	const handleSortClick = () => {
		dispatch(setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'));
	};

	useEffect(() => {
		handleSearchSubmit();
	}, [sortOrder]);

	return (
		<form className={c.searchBar} onSubmit={handleSearchSubmit}>
			<input
				type="text"
				placeholder="Search Art"
				value={localSearchTerm}
				onChange={handleSearchChange}
			/>
			{error && <p className={c.error}>{error}</p>}
			<button type="submit">
				<img onClick={handleSortClick} src={sort} alt="sort" />
				<img src={search} alt="search" />
			</button>
		</form>
	);
}

export default SearchBar;
