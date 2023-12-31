import { useContext } from 'react';
import { func, string } from 'prop-types';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import { BiSolidFileArchive } from "react-icons/bi";
import { AiFillFileAdd } from "react-icons/ai";
import { IoLogOutSharp } from "react-icons/io5";
import { FaLanguage } from "react-icons/fa6";

function NotesHeader({ logout, name }) {
  const linkStyle = {
    textDecoration: "none",
    color: 'black',
  };

  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <header className="mb-5">
      <nav className="navbar fixed-top navbar-expand-sm navbar-light" id="neubar">
        <div className="container">
          <Link to={"/"} className='lh-lg fs-3' style={linkStyle}><b>{name}</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse fs-3" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto p-1">
              <li className="nav-item mx-auto p-1">
                <Link style={linkStyle} onClick={toggleLocale}><span className='fs-5 fw-bold'>{locale}</span> <FaLanguage /></Link>
              </li>
              <li className="nav-item mx-auto p-1">
                <Link to={"/archieve"} style={linkStyle}><BiSolidFileArchive /></Link>
              </li>
              <li className="nav-item mx-auto p-1">
                <Link to={"/add"} style={linkStyle}><AiFillFileAdd /></Link>
              </li>

              <li className="nav-item mx-auto ps-1 pb-1">
                <div style={linkStyle}><a onClick={logout} className='btn btn-outline-dark rounded-pill mt-2 fw-bold border-2'>{locale === 'id' ? 'Keluar' : 'Logout'} <IoLogOutSharp /></a></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

NotesHeader.propTypes = {
  logout: func.isRequired,
  name: string.isRequired
}

export default NotesHeader;