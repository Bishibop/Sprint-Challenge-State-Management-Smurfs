import React from 'react';
import { connect } from 'react-redux';

import { editSmurf, deleteSmurf } from '../actions/actions';

function Smurf({ smurf, editSmurf, deleteSmurf }) {
  return (
    <div className='smurfs'>
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <button onClick={() => editSmurf(smurf)}>Edit</button>
      <button onClick={() => deleteSmurf(smurf)}>Delete</button>
    </div>
  );
}

export default connect(null, { editSmurf, deleteSmurf })(Smurf);
