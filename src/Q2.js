import React, { Component } from 'react';
import {observer} from 'mobx-react';
import store from './store.js';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';



class Q2 extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event, value){
    store.setQ2_answer(value);
  }

  render() {
    return (
      <div style={store.q2style}>
      <p>2. It is _______ to go out on a typhoon day. The sky is dark and the wind is strong.</p>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" valueSelected={store.Q2_answer} onChange={this.handleChange} >
          <RadioButton value="A" label="(A) careful" />
          <RadioButton value="B" label="(B) fashionable" />
          <RadioButton value="C" label="(C) dangerous" />
          <RadioButton value="D" label="(D) convenient"/>
        </RadioButtonGroup>
      </div>
    );
  }
}

export default observer(Q2);
