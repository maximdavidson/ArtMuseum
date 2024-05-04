import { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import c from './Topics.module.css';
import PaginationComponent from './PaginationComponent';
import Icon from '@assets/Icons.png';
import IconActive from '@assets/Icons-active.png';
import { addFavorite } from '../../store/favoritesSlice';
import { selectArtwork } from 'src/store/selectedArtworkSlice';
import { useDispatch, useSelector } from 'react-redux';
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

function Topics() {
	const [artworks, setArtworks] = useState<Artwork[]>([]);
	const [page, setPage] = useState(1);
	const totalPages = 4;
	const favorites = useSelector((state: RootState) => state.favorites);

	const dispatch = useDispatch();

	useEffect(() => {
		if (page <= totalPages) {
			axios
				.get(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=3`)
				.then((response) => {
					setArtworks(response.data.data);
				})
				.catch((error) => {
					console.error('There was an error!', error);
				});
		}
	}, [page]);

	const handlePageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= totalPages) {
			setPage(newPage);
		}
	};

	const addToFavorites = (artwork: Artwork) => {
		if (!favorites.find((fav: Artwork) => fav.image_id === artwork.image_id)) {
			dispatch(addFavorite(artwork));
		}
	};

	const isFavorite = (artwork: Artwork) => {
		return favorites.find((fav: Artwork) => fav.image_id === artwork.image_id);
	};

	const handleMoreClick = (artwork: Artwork) => {
		dispatch(selectArtwork(artwork));
	};

	return (
		<div className={`${c.wrapper} container`}>
			<h4 className={c.title}>Topics for you</h4>
			<h1 className={c.subtitle}>Our special gallery</h1>

			<div className={c.selection}>
				{artworks.map((artwork: Artwork, index: number) => (
					<div key={index} className={c.artwork}>
						<img
							src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,1000/0/default.jpg`}
							alt={artwork.title}
						/>
						<div className={c.artworkInfo}>
							<div className={c.text_side}>
								<h2 className={c.work_title}>{artwork.title}</h2>
								<p className={c.artist_title}>{artwork.artist_title}</p>
								<div className={c.info_text}>
									<p className={c.more_text}>
										<NavLink
											to={`/overview/${artwork.image_id}`}
											onClick={() => handleMoreClick(artwork)}
										>
											More
										</NavLink>
									</p>
								</div>
							</div>
							<div className={c.icon_side}>
								<img
									src={isFavorite(artwork) ? IconActive : Icon}
									alt="Save Icon"
									onClick={() => addToFavorites(artwork)}
								/>
							</div>
						</div>
					</div>
				))}
			</div>

			<PaginationComponent
				page={page}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}

export default Topics;
