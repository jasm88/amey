import { Link } from 'react-router-dom';
import './Navigation.scss'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/filedrop">File Drop Sort</Link></li>
        <li><Link to="/bash">Bash Shell Sort</Link></li>
        <li><Link to="/csharp">C# Sort</Link></li>
        <li><Link to="/Python">Python</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;