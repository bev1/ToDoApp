export function renameFolder (id, newName) {
    return {
        type: 'RENAME_FOLDER',
        id: id,
        newName: newName
    }
}