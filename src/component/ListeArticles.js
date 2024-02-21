import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { supprimer } from '../store/store';

const ListeArticles = () => {
    const articles = useSelector(state=>state.articles)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Liste des articles</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Designation</th>
                    <th>Prix Unitaire</th>
                    <th>Quantite</th>
                    <th>Prix Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {articles.map(a=>
                    (
                        <tr key={a.code}>
                            <td>{a.code}</td>
                            <td>{a.designation}</td>
                            <td>{a.pu}</td>
                            <td>{a.quantite}</td>
                            <td>{a.prixTotal}</td>
                            <td><button onClick={() => dispatch(supprimer(a.code))}>Supprimer</button></td>
                        </tr>
                    )
                    )}
            </tbody>
        </table>
    </div>
  )
}

export default ListeArticles