import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { About } from './About'
import { Dashboard } from './Dashboard'
import { Home } from './Home'
import "../Styles/Header.css"

function Header() {
  return (
    <BrowserRouter>
      <header className='cabecera'>
        <nav>
          <NavLink to="/Home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/About">
            <li>About</li>
          </NavLink>
          <NavLink to="/Dashboard">
            <li>Dashboard</li>
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path='/Home' element={ <Home/> } />
        <Route path='/About' element={ <About/> } />
        <Route path='/Dashboard' element={ <Dashboard/> } />
        <Route path='/*' element={ <Home/> } />
      </Routes>
    </BrowserRouter>
  )
}

export {Header}