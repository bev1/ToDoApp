const chooseFolder = (
    state = {
        activeFolderId: 0,
    }, action) => {
        switch (action.type) {
            case 'CHOOSE_FOLDER': return (
                state = {
                    ...state,
                    activeFolderId: action.id
                })
            default:
                return state;    
        }
    }

export default chooseFolder;