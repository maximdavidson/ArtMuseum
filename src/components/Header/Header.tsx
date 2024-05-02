import '../../App.css';
import c from './Header.module.css';
import logo from '@assets/museum-logo.png';
import bookmark from '@assets/bookmark.png';
import home from '@assets/home.png';
import { useLocation, NavLink } from 'react-router-dom';

function Header() {
	const location = useLocation();
	const isFavoritePage = location.pathname === '/favorite';

	return (
		<div className={c.wrapper}>
			<div className="container">
				<div className={c.small_wrap}>
					<img className={c.logo} src={logo} alt="Museum Logo" />
					<div className={c.fav}>
						{isFavoritePage && (
							<NavLink to="/" className={c.link}>
								<img className={c.mark} src={home} alt="Bookmark" />
								Home
							</NavLink>
						)}
						<NavLink to="/favorite" className={c.link}>
							<img className={c.mark} src={bookmark} alt="Bookmark" />
							Your favorites
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
