import React from 'react';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
  marginRight: 24,
};


const RustyIcon = () => (
  <div>
    <Icon style={iconStyles} hoverColor={greenA200} />
  </div>
);

export default RustyIcon