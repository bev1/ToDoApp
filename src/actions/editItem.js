export function editItem (value, itemId, folderId) {
    return {
        type: 'EDIT_ITEM',
        itemId: itemId,
        folderId: folderId,
        value: value
    }
}