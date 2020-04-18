import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/actions';

import Smurf from './Smurf';

function Smurfs({ smurfs, getSmurfs }) {
  useEffect(() => {
    getSmurfs();
  }, []);

  console.log('smurfs in the upper compoent: ', smurfs);
  return (
    <div className='smurfs-container'>
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
