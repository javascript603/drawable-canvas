/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { 
  GET_CONTENTS_REQUEST,
  GET_CONTENTS_SUCCESS,
  GET_CONTENTS_ERROR,
  SAVE_CONTENTS_REQUEST,
  SAVE_CONTENTS_SUCCESS,
  SAVE_CONTENTS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: true,
  error: false,
  contents: {}
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTENTS_REQUEST:
      return state
        .set('loading', true)
        .set('contents', {})
        .set('error', false);
    case GET_CONTENTS_SUCCESS:
      return state
        .set('loading', false)
        .set('contents', action.contents)
        .set('error', false);
    case GET_CONTENTS_ERROR:
      return state
        .set('loading', false)
        .set('error', true);
    case SAVE_CONTENTS_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case SAVE_CONTENTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false);
    case SAVE_CONTENTS_ERROR:
      return state
        .set('loading', false)
        .set('error', true);
    default:
      return state;
  }
}

export default homeReducer;
