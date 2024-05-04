import c from './Search.module.css';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

function Search() {
	return (
		<div className={c.wrapper}>
			<p className={c.text}>
				Let&apos;s Find Some <span className={c.artColor}>Art</span> <br />{' '}
				Here!
			</p>
			<SearchBar />
			<SearchResult />
		</div>
	);
}

export default Search;
