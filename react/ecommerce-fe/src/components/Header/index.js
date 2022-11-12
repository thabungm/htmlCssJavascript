import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='menuLinks'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
