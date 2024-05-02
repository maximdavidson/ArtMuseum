import c from './Search.module.css';
import SearchBar from './SearchBar';

function Search() {
	return (
		<div className={c.wrapper}>
			<p className={c.text}>
				Let&apos;s Find Some <span className={c.artColor}>Art</span> <br />{' '}
				Here!
			</p>
			<SearchBar />
		</div>
	);
}

export default Search;
