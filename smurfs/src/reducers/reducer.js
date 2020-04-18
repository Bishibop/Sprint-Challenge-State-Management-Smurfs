import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL,
  PUT_SMURF_START,
  PUT_SMURF_SUCCESS,
  PUT_SMURF_FAIL,
  EDIT_SMURF,
  CLEAR_EDIT_SMURF,
  CLEAR_EDITING
} from '../actions/actions';

const initialState = {
  smurfs: [],
  smurfToEdit: null,
  isEditing: false,
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
        smurfs: action.payload,
        isFetching: false,
        error: '',
      };
    case POST_SMURF_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: '',
      };
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case PUT_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case PUT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: '',
      };
    case PUT_SMURF_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case EDIT_SMURF:
      console.log('trying to edit the smurf', action.payload);
      return {
        ...state,
        isEditing: true,
        smurfToEdit: action.payload
      };
    case CLEAR_EDIT_SMURF:
      console.log('trying to clear from the reducer');
      return {
        ...state,
        smurfToEdit: null
      };
    case CLEAR_EDITING:
      return {
        ...state,
        isEditing: false
      };
    default:
      return state;
  }
}

export default reducer;
