export function reducerFn(state = {}, action) {
    switch (action.type) {

        case 'TOGGLE_PRODUCT_CODE':
            return {
                ...state,
                showProductCode: action.payload
            };
        default:
            return state;
    }
}
