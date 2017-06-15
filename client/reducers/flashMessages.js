import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions';

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ];

        case DELETE_FLASH_MESSAGE:
            let flashIndex = findIndex(state, { id: action.id });
            return flashIndex >= 0 ? [...state.slice(0, flashIndex), ...state.slice(flashIndex + 1)] : state;

        default: return state;
    }
};