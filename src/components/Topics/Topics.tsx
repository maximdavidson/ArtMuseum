import { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import c from './Topics.module.css';
import PaginationComponent from './PaginationComponent';

interface Artwork {
	title: string;
	image_id: string;
	artist_title: string;
}

function Topics() {
	const [artworks, setArtworks] = useState<Artwork[]>([]);
	const [page, setPage] = useState(1);
	const totalPages = 4;

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
							<h2>{artwork.title}</h2>
							<p>{artwork.artist_title}</p>
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
