import React from 'react'
import {ReactComponent as TastyLogo } from '../../assets/navigation/tasty.svg'
import {ReactComponent as YandexLogo } from '../../assets/navigation/yandex.svg'
import {ReactComponent as MainLogo } from '../../assets/navigation/logo.svg'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className='nav'>
      <TastyLogo className='nav-logo-tasty'/>
      <MainLogo className='nav-logo'/>
      <YandexLogo className='nav-logo-yandex'/>
    </nav>
  )
}

export default NavBar