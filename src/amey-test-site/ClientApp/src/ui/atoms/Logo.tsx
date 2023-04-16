import logo from '../../assets/logo.png'
import './Logo.scss'


export const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Generic Company Logo" />
    </div>
  );
};