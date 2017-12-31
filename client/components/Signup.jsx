import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import BusinessSignup from './BusinessSignup.jsx';
import PetOwnerSignup from './PetOwnerSignup.jsx';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'petOwner',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, value) {
    this.setState({ selected: value }, () => console.log('changed selection'));
  }

  render() {
    const style = {
      paper: {
        height: 'auto',
        width: 'auto',
        padding: 25,
        margin: 20,
        textAlign: 'left',
        display: 'inline-block',
      },
      linkText: {
        fontFamily: 'Roboto, sans-serif',
        display: 'inline'
      },
      radioButton: {
        marginBottom: 16,
      },
    };
    return (
      <div>
      <Paper style={style.paper} zDepth={5}>
        <div style={{ whiteSpace: 'nowrap', marginTop: 15, backgroundColor: 'white' }}>
        <RadioButtonGroup
          name="signUpType"
          defaultSelected="petOwner"
          onChange={this.onChange}
          >
          <RadioButton
            iconStyle={{ fill: '#7CB342' }}
            value="business"
            label="Business"
            style={style.radioButton}
          />
          <RadioButton
            iconStyle={{ fill: '#7CB342' }}
            value="petOwner"
            label="Pet Owner"
            style={style.radioButton}
          />
        </RadioButtonGroup>
         <br/>
         {
          this.state.selected === 'business' ?
          (<BusinessSignup app={this.props.app} userType="business"/>) :
          (<PetOwnerSignup app={this.props.app} userType="petOwner"/>)
         }
        </div>
      </Paper>
      </div>
    )
  }
};

export default Signup;

