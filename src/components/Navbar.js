import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom';

export default function Navbar(pro) {
  return (
    <>
    <nav style={styles.navbar} className={`navbar navbar-${pro.mode} bg-${pro.mode}`}>
      <h3 className={`textU text-${pro.mode==='light'? 'dark':'light'}`}   style={styles.link}>{pro.title}</h3>
      <div>
    <a href="#" style={styles.link}>Home</a>
      {/* <a href="/about" style={styles.link}>About</a> */}
      {/* using link and to instead of a and href so that page won't get reloaded */}
      </div>
      <div className={`form-check form-switch text-${pro.mode==='light'? 'dark':'light'}`}>
      <input className="form-check-input" onClick={pro.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
    </nav>
  </>
  )
}

const styles = {
  navbar: {
    padding: '15px',
    textAlign: 'center',
    display: 'flex'
  },
  link: {
    textDecoration: 'none',
    margin: '0 15px',
  }, 
};

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     about: PropTypes.string
// }

// Navbar.defaultProps = {
//     title: "Set Title here",
//     about: 'Set about here'
// }
