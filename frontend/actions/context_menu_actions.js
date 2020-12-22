export const RECEIVE_CONTEXT_MENU_STATUS = 'RECEIVE_CONTEXT_MENU_STATUS';

export const updateContextMenuStatus = details => {
    return {
        type: RECEIVE_CONTEXT_MENU_STATUS,
        details
    };
};