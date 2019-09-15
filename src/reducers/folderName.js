const FolderName = (
    state = {
        folderName: '',
    }, action) => {
        switch (action.type) {
            case 'FOLDER': return (
                state = {
                    ...state,
                    folderName: action.name
                })
            default:
                return state;    
        }
    }

export default FolderName;