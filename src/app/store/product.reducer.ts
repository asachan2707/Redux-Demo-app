import { createReducer, ActionReducerMap } from '@ngrx/store';

export const reducerFn = (state = {}, action) => {
    switch (action.type) {

        case 'TOGGLE_PRODUCT_CODE':
            console.log('In Reducer: ', state, action);
            return {
                ...state,
                showProductCode: action.payload
            };
        default:
            console.log('default In Reducer: ', state, action);
            return state;
    }
};


export const productReducer: ActionReducerMap<any, any> = {
    router: reducerFn
};
