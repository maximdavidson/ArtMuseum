import c from './Favorite.module.css';
import group from '@assets/Group746.png';

function Favorite() {
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
		</div>
	);
}

export default Favorite;
