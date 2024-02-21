import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <Link to='/'>Accueil</Link>|
        <Link to='/articles'>Liste des articles</Link>|
        <Link to='/add-article'>Ajouter Article</Link>
    </div>
  )
}

export default Menu