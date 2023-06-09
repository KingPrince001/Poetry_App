import {FaHome} from 'react-icons/fa'
// coffee icon
import {FaCoffee} from 'react-icons/fa'
//categories icon
import {FaTags} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
//import Links
import { Link } from 'react-router-dom'
import './navbar.css';
import Logo from './Logo';

const NavBar = () => {
  return (
    <nav style={{width:'100%'}}>
      <Logo />
      <ul>
        <li>
          <Link to="/" className='link'><FaHome/>Home</Link>
         
        </li>
        <li>
          <Link to="/poems" className='link'><FaCoffee/>Poems</Link>
         
        </li>
        <li>
          <Link to='/authors' className='link'><FaUsers/>Authors</Link>
         </li>
        
        <li>
          <Link to='/categories' className='link'><FaTags/>Categories</Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
