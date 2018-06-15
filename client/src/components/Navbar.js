import React, { Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from '../fakeAuth'

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black'
  },
  link: {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
  }
}

const NavBar = ({ history }) => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
    { isAuthenticated() ?
        <Fragment>
          {' '}
          <NavLink activeStyle={styles.active} to="/dashboard">
            Dashboard
          </NavLink>
          {' '}
          <span style={styles.link} onClick={ () => {
            logout()
            history.push("/login")
          }}>
            Logout
          </span>
        </Fragment>
        :
        <Fragment>
          {' '}
          <NavLink activeStyle={styles.active} to="/login">
            Login
          </NavLink>
        </Fragment>
    }
  </nav>
)

export default withRouter(NavBar)