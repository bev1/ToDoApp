const newFolderName = (
    state = {
        newFolderName: '',
    }, action) => {
        switch (action.type) {
            case 'NEW_FOLDER_NAME': return (
                state = {
                    ...state,
                    newFolderName: action.value
                })
            default:
                return state;    
        }
    }

export default newFolderName;