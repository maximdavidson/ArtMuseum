import 'src/App.css';
import c from './Footer.module.css';
import logo from '@assets/museum-logo-2.png';
import logoMod from '@assets/logo-modsen.png';

function Footer() {
	return (
		<div className={c.wrapper}>
			<div className="container">
				<div className={c.footer_wrap}>
					<img className={c.logo} src={logo} alt="Museum Logo" />
					<img className={c.logo} src={logoMod} alt="Modsen Logo" />
				</div>
			</div>
		</div>
	);
}

export default Footer;
