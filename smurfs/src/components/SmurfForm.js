import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf, putSmurf, clearEditSmurf, clearEditing } from '../actions/actions';

function SmurfForm({ smurfToEdit, isEditing, postSmurf, putSmurf, clearEditSmurf, clearEditing }) {

  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const [editingSmurf, setEditingSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  if (smurfToEdit) {
    setEditingSmurf(smurfToEdit);
    clearEditSmurf();
  }

  const handleChange = event => {
    if (isEditing) {
      setEditingSmurf({ ...smurf, [event.target.name]: event.target.value });
    } else {
      setSmurf({ ...smurf, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('form submit', smurf);
    if (isEditing) {
      putSmurf(editingSmurf);
      clearEditing();
    } else {
      postSmurf(smurf);
    }
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
            value={isEditing ? editingSmurf.name : smurf.name}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>Age:
          <input
            type='text'
            name='age'
            value={isEditing ? editingSmurf.age : smurf.age}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>Height:
          <input
            type='text'
            name='height'
            value={isEditing ? editingSmurf.height : smurf.height}
            onChange={handleChange}
          />
        </label>
        <br/>
        <button type='submit'>
          {isEditing ? 'Update Smurf' : 'Add Smurf'}
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  smurfToEdit: state.smurfToEdit,
  isEditing: state.isEditing,
});

export default connect(mapStateToProps, { postSmurf, clearEditSmurf, clearEditing })(SmurfForm);
