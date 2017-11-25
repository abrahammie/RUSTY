import React from 'react';
import AppBar from 'material-ui/AppBar';
import Axios from 'axios';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RustyIcon from './RustyIcon.jsx';

// function handleTouchTap() {
//   Axios.get('/')
//     .then((response) =>
//       console.log('TITLE CLICK:', response)
//     )
//     .catch((error) =>
//       console.log('TITLE CLICK ERROR:', error)
//     )
// }

// onTitleTouchTap={handleTouchTap}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const ProfileHeader = (props) => (

  <AppBar
    title={<span style={styles.title}>RUSTY</span>}
    iconElementLeft={<IconButton />}
    iconElementRight={<FlatButton style={{ float: 'right' }} label="log out" onClick={props.onLogOut} />}
  />

);

export default ProfileHeader;
