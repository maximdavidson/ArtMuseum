import { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import c from './Works.module.css';
import Icon from '@assets/Icons.png';
import IconActive from '@assets/Icons-active.png';
import { addFavorite } from '../../store/favoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Artwork {
	title: string;
	image_id: string;
	artist_title: string;
}

function Works() {
	const [artworks, setArtworks] = useState<Artwork[]>([]);
	const favorites = useSelector((state: RootState) => state.favorites);
	const page = 1;
	const totalPages = 9;
	const dispatch = useDispatch();

	useEffect(() => {
		if (page <= totalPages) {
			axios
				.get(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=9`)
				.then((response) => {
					setArtworks(response.data.data);
				})
				.catch((error) => {
					console.error('There was an error!', error);
				});
		}
	}, [page]);

	const addToFavorites = (artwork: Artwork) => {
		if (!favorites.find((fav: Artwork) => fav.image_id === artwork.image_id)) {
			dispatch(addFavorite(artwork));
		}
	};

	const isFavorite = (artwork: Artwork) => {
		return favorites.find((fav: Artwork) => fav.image_id === artwork.image_id);
	};

	return (
		<div className={`${c.wrapper} container`}>
			<h4 className={c.title}>Here some more</h4>
			<h1 className={c.subtitle}>Other works for you</h1>

			<div className={c.selection}>
				{artworks.map((artwork: Artwork, index: number) => (
					<div key={index} className={c.artwork}>
						<img
							src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,1000/0/default.jpg`}
							alt={artwork.title}
							className={c.image}
						/>
						<div className={c.artworkInfo}>
							<div className={c.text_side}>
								<h2 className={c.work_title}>{artwork.title}</h2>
								<p className={c.artist_title}>{artwork.artist_title}</p>
								<p className={c.work_text}>Public</p>
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
		</div>
	);
}

export default Works;
