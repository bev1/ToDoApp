const SearchTerm = (
    state = {
        searchTerm: '',
    }, action) => {
        switch (action.type) {
            case 'GET_SEARCH_VALUE': return (
                state = {
                    ...state,
                    searchTerm: action.value
                })
            default:
                return state;    
        }
    }

export default SearchTerm;