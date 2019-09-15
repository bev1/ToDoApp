export function toDoList (newItem) {
    return {
        type: 'ADD_FOLDER',
        newItem: newItem
    }
}