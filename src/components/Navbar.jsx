import { NavLink } from 'react-router-dom';
import logo from './assets/planet.png';

const Navbar = () => (

  <header>
    <nav>
      <div className="header-container">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="header-title">Space Travelers&apos; Hub</h1>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className="rockets-page"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="missions"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="myprofile"
            className="my-profile-nav"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
