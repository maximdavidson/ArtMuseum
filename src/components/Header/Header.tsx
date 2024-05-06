import { useState } from 'react';
import 'src/App.css';
import c from './Header.module.css';
import logo from '@assets/museum-logo.png';
import bookmark from '@assets/bookmark.png';
import home from '@assets/home.png';
import menuIcon from '@assets/menuIcon.png';
import closeIcon from '@assets/menuIcon-close.png';
import { useLocation, NavLink } from 'react-router-dom';

function Header() {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = isOpen ? 'auto' : 'hidden';
	};

	return (
		<div className={c.wrapper}>
			<div className="container">
				<div className={c.small_wrap}>
					<img className={c.logo} src={logo} alt="Museum Logo" />
					<div className={c.desktopMenu}>
						{!isHomePage && (
							<NavLink to="/" className={c.link}>
								<img className={c.mark} src={home} alt="Home" />
								Home
							</NavLink>
						)}
						<NavLink to="/favorite" className={c.link}>
							<img className={c.mark} src={bookmark} alt="Bookmark" />
							Your favorites
						</NavLink>
					</div>
					<img
						src={isOpen ? closeIcon : menuIcon}
						alt="Menu"
						className={c.menuIcon}
						onClick={toggleMenu}
					/>
					{isOpen && (
						<div className={`${c.menu} ${isOpen ? c.open : ''}`}>
							{!isHomePage && (
								<NavLink
									to="/"
									className={c.link}
									onClick={(e) => {
										e.stopPropagation();
										toggleMenu();
									}}
								>
									<img className={c.mark} src={home} alt="Home" />
									Home
								</NavLink>
							)}
							<NavLink to="/favorite" className={c.link} onClick={toggleMenu}>
								<img className={c.mark} src={bookmark} alt="Bookmark" />
								Your favorites
							</NavLink>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
