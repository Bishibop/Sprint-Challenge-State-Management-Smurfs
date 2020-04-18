import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL
} from '../actions/actions';

const initialState = {
  smurfs: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: '',
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case POST_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isFetching: false,
        error: '',
      };
    case POST_SMURF_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
