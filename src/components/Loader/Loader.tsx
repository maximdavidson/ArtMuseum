import { useEffect, useState } from 'react';
import c from './Loader.module.css';
import LogoMuseum from '@assets/museum-logo-2.png';

function Loader() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 4000);

		document.body.style.overflow = loading ? 'hidden' : 'auto';

		return () => clearTimeout(timer);
	}, [loading]);

	if (!loading) {
		return null;
	}

	return (
		<div className={c.loader}>
			<img className={c.logo} src={LogoMuseum} alt="logo" />
			<div className={c.spinner}></div>
		</div>
	);
}

export default Loader;
