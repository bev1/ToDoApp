const ToDoList = (
    state = {
        list: [
            ['work',
                ['Finish the monthly report', false],
                ['Clean browser history from office PC', false],
                ['Dont forget to congratulate the boss on his birthday', false]
            ],
            ['study',
                ['React.js', false],
                ['Node.js', false],
                ['English', false]
            ],
            ['movies to watch',
                ['Star Wars', false],
                ['Fight Club', false],
                ['Jurassic Park', false]
            ]
        ]
    }, action) => {
        switch (action.type) {
            case 'ADD_FOLDER': return (
                state = {
                    ...state,
                    list: [...state.list, [action.newItem]]
            })
            case 'DELETE_FOLDER': return (
                state = {
                    ...state,
                    list: state.list.filter((item, i) => i !== action.id)
            })
            case 'ADD_LIST_ITEM':
            const newItem = ['New list item', false]
            const newList = [...state.list]
            newList[action.id].push(newItem)
            return (
                state = {
                    ...state,
                    list: newList
            })
            case 'EDIT_ITEM':
            const updatedList= [...state.list]
            updatedList[action.folderId][action.itemId][0] = action.value
            return (
                state = {
                    ...state,
                    list: updatedList
            })
            case 'CHECK_ITEM':
            const checkedList= [...state.list]
            checkedList[action.folderId][action.itemId][1] = action.checked
            return (
                state = {
                    ...state,
                    list: checkedList
            })
            case 'RENAME_FOLDER':
                const renamedFoldersList= [...state.list]
                renamedFoldersList[action.id][0] = action.newName
            return (
                state = {
                    ...state,
                    list: renamedFoldersList
            })
            default:
                return state;    
        }
    }

export default ToDoList;