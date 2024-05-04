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
			<div>
				<div className={c.text_side}>
					<h1 className={c.title}>{selectedArtwork.title}</h1>
					<p className={c.artist_title}>{selectedArtwork.artist_title}</p>
					<p className={c.date_display}>{selectedArtwork.date_display}</p>
				</div>

				<div className={c.over_wrapp}>
					<p className={c.over_title}>Overview</p>
					<p className={c.list}>
						<span>Artist nacionality:</span> {selectedArtwork.artist_display}
					</p>
					<p className={c.list}>
						<span>Dimensions Sheet:</span> {selectedArtwork.dimensions}
					</p>
					<p className={c.list}>
						<span>Credit Line:</span> {selectedArtwork.credit_line}
					</p>
					<p className={c.list}>
						<span>Department:</span> {selectedArtwork.department_title}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Overview;
