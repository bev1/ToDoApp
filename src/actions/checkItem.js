export function checkItem (checked, itemId, folderId) {
    return {
        type: 'CHECK_ITEM',
        itemId: itemId,
        folderId: folderId,
        checked: checked
    }
}