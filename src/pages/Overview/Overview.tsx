import c from './Overview.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import '../../App.css';

function Overview() {
	const selectedArtwork = useSelector(
		(state: RootState) => state.selectedArtwork.artwork,
	);

	if (!selectedArtwork) {
		return <div>No artwork selected</div>;
	}

	return (
		<div className={`${c.wrapper} container`}>
			<img
				src={`https://www.artic.edu/iiif/2/${selectedArtwork.image_id}/full/843,1000/0/default.jpg`}
				alt={selectedArtwork.title}
				className={c.image}
			/>
			<div className={c.text_side}>
				<h1 className={c.title}>{selectedArtwork.title}</h1>
				<p className={c.artist_title}>{selectedArtwork.artist_title}</p>
			</div>

			{/* <p className={c.date}>{selectedArtwork.date}</p> */}
		</div>
	);
}

export default Overview;
