let user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).user
    : ''

export const initialState = {
    user: '' || user,
}

const reducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                user: action.payload.user
            }

        case 'LOGOUT':
            return{
                ...state,
                user: ''
            }
        
        default: 
            return state;
    }
}

export default reducer;