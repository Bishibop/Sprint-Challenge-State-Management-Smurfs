import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://192.168.1.208:3333/smurfs')
    .then(res => {
      return dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err}));
};

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';

export const postSmurf = (newSmurfData) => dispatch => {
  dispatch({ type: POST_SMURF_START, payload: newSmurfData });
  axios
    .post('http://192.168.1.208:3333/smurfs', newSmurfData)
    .then(res => {
      return dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: POST_SMURF_FAIL, payload: err}));
};

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL';

export const deleteSmurf = (smurf) => dispatch => {
  dispatch({ type: DELETE_SMURF_START, payload: smurf });
  axios
    .delete(`http://192.168.1.208:3333/smurfs/${smurf.id}`)
    .then(res => {
      return dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: DELETE_SMURF_FAIL, payload: err}));
};
