import '../../App.css';
import c from './Header.module.css';
import logo from '@assets/museum-logo.png';
import bookmark from '@assets/bookmark.png';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<div className={c.wrapper}>
			<div className="container">
				<div className={c.small_wrap}>
					<img className={c.logo} src={logo} alt="Museum Logo" />
					<div className={c.fav}>
						<img className={c.mark} src={bookmark} alt="Bookmark" />
						<NavLink to="/favorite" className={c.link}>
							Your favorites
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
