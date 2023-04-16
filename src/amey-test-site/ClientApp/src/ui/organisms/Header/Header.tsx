import { Logo } from '../../atoms/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.scss'

const Header = () => {
  return (
    <header>
        <Logo />
        <Navigation />
    </header>
  );
};

export default Header;