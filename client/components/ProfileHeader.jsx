import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import RustyIcon from './RustyIcon.jsx'
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const AppBarExampleIconButton = () => (
  <AppBar
    title={<span style={styles.title}>RUSTY</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><RustyIcon /></IconButton>}
    iconElementRight={<FlatButton label="log out" />}
  />
);

export default ProfileHeader;