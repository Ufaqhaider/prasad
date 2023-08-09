import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>

     <div className='fullnavbar w-100'>

    
      <nav className="navbar h-75 navbar-expand-md navbar-dark">
        <div className="container-fluid main-nav">
          <div className="navbar-brand-container">
            <a className="navbar-brand" href="#">
              <img
                className="logo horizontal-logo"
                src="WhatsApp_Image_2023-02-08_at_12.12.19_PM-removebg-preview-1.png"
                alt="forecastr logo"
              />
              <span className='logo-name'>Prasad International School</span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={()=>setIsNavOpen(!isNavOpen)}
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse${
              isNavOpen ? ' show' : ''
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
           
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={closeNav}
                >
                  Home
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown2"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown3"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={closeNav}
                >
                  Academic
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown3"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown3"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={closeNav}
                >
                  Admission & Withdraw
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown3"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown3"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={closeNav}
                >
                  Mandatory Disclosure
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown3"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      </div>
    </>
  );
};

export default Navbar;
