import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../actions/actions';

function SmurfForm({ postSmurf }) {

  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = event => {
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('form submit', smurf);
    postSmurf(smurf);
    setSmurf({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <div className='smurfs-form'>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input
            type='text'
            name='name'
            value={smurf.name}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>Age:
          <input
            type='text'
            name='age'
            value={smurf.age}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>Height:
          <input
            type='text'
            name='height'
            value={smurf.height}
            onChange={handleChange}
          />
        </label>
        <br/>
        <button type='submit'>Add Smurf</button>
      </form>
    </div>
  );
}

export default connect(null, { postSmurf })(SmurfForm);
