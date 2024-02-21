import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { ajouter } from '../store/store';
import { useNavigate } from 'react-router-dom';

const AjouterArticle = () => {
    const [code,setCode] = useState('');
    const [designation,setDesignation] = useState('');
    const [pu,setPu] = useState(0);
    const [quantite,setQuantite] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e=>{
        e.preventDefault();

        let article = {
            code : code,
            designation : designation,
            pu : pu,
            quantite : quantite,
            prixTotal : pu * quantite
        }
        dispatch(ajouter(article));

        navigate('/articles')
    }
  return (
    <div>
        <h1>Ajouter Article</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={code} onChange={e=>setCode(e.target.value)} placeholder='Code'/><br/>
            <input type="text" value={designation} onChange={e=>setDesignation(e.target.value)} placeholder='Designation'/><br/>
            <input type="number" value={pu} onChange={e=>setPu(e.target.value)} placeholder='PU'/><br/>
            <input type="number" value={quantite} onChange={e=>setQuantite(e.target.value)} placeholder='Quantite'/><br/>
            <button>Ajouter</button>
        </form>
    </div>
  )
}

export default AjouterArticle