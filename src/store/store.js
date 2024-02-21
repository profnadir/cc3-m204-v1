export const AJOUTER = 'ajouter';
export const SUPPRIMER = 'supprimer';

export const ajouter = (article)=>{
    return {
        type : AJOUTER,
        payload : article
    }
} 

export const supprimer = (code)=>{
    return {
        type : SUPPRIMER,
        payload : code
    }
} 

const initialSate = {
    articles : []
}

const reducer = (state = initialSate,action) => {
    switch (action.type) {
        case AJOUTER:
            return {
                ...state,
                articles : [...state.articles,action.payload]
            }
        case SUPPRIMER:
            return {
                ...state,
                articles : state.articles.filter(a => a.code !==action.payload)
            }
        default:
            return state;
    }
}

export default reducer;