import { useState } from 'react';
import search from '@assets/search.png';
import c from './Search.module.css';

function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div className={c.searchBar}>
			<input
				type="text"
				placeholder="Search Art, Artist, Work..."
				value={searchTerm}
				onChange={handleSearchChange}
			/>
			<button type="submit">
				<img src={search} alt="search" />
			</button>
		</div>
	);
}

export default SearchBar;
