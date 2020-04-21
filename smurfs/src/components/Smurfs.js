import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/actions';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

function Smurfs({ smurfs, getSmurfs }) {
  useEffect(() => {
    getSmurfs();
  }, []);

  return (
    <div className='smurfs-container'>
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
      <SmurfForm />
    </div>
  );
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
