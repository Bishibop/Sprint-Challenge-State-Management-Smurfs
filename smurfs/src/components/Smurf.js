import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions/actions';

function Smurf({ smurf, deleteSmurf }) {
  return (
    <div className='smurfs'>
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <button onClick={() => deleteSmurf(smurf)}>Delete</button>
    </div>
  );
}

export default connect(null, { deleteSmurf })(Smurf);
