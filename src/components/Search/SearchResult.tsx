import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setResults } from 'src/store/searchResultSlice';
import { selectArtwork } from 'src/store/selectedArtworkSlice';
import c from './Search.module.css';
import { RootState } from '../../store/store';
import { NavLink } from 'react-router-dom';

interface Artwork {
	title: string;
	image_id: string;
	artist_title: string;
	date_display: string;
	artist_display: string;
	dimensions: string;
	credit_line: string;
	department_title: string;
}

function SearchResult() {
	const dispatch = useDispatch();
	const searchTerm = useSelector(
		(state: RootState) => state.searchResult.searchTerm,
	);
	const results = useSelector((state: RootState) => state.searchResult.results);

	useEffect(() => {
		if (searchTerm) {
			fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}`)
				.then((response) => response.json())
				.then((data) => {
					const filteredResults = data.data.filter((artwork: Artwork) =>
						artwork.title.toLowerCase().includes(searchTerm.toLowerCase()),
					);
					dispatch(setResults(filteredResults));
				})
				.catch((error) => console.error(error));
		}
	}, [searchTerm, dispatch]);

	const handleArtworkClick = (artwork: Artwork) => {
		dispatch(selectArtwork(artwork));
	};

	return (
		<div className={c.results}>
			{results.map((result) => (
				<NavLink
					to={`/overview/${result.image_id}`}
					key={result.image_id}
					className={c.result}
					onClick={() => handleArtworkClick(result)}
				>
					<h2 className={c.result_title}>{result.title}</h2>
				</NavLink>
			))}
		</div>
	);
}

export default SearchResult;
