import c from './Favorite.module.css';
import group from '@assets/Group746.png';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import '../../App.css';
import Delete from '@assets/delete.png';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../store/favoritesSlice';
import { selectArtwork } from 'src/store/selectedArtworkSlice';
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

function Favorite() {
	const favorites = useSelector((state: RootState) => state.favorites);
	const dispatch = useDispatch();
	const removeFromFavorites = (artwork: Artwork) => {
		dispatch(removeFavorite(artwork));
	};

	const handleMoreClick = (artwork: Artwork) => {
		dispatch(selectArtwork(artwork));
	};

	return (
		<div className={c.wrapper}>
			<div className={c.title_group}>
				<p className={c.title}>Here are your </p>
				<img src={group} alt="Favorite" className={c.subtitle} />
			</div>

			<div className={c.text_group}>
				<p className={c.small_text}>Saved by you </p>
				<p className={c.text}>Your favorites list </p>
			</div>

			<div className={`${c.selection} container`}>
				{favorites.map((artwork: Artwork, index: number) => (
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
						<div
							className={c.icon_side}
							onClick={() => removeFromFavorites(artwork)}
						>
							<img src={Delete} alt="Delete icon" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Favorite;
