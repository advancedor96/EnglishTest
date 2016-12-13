import React, { Component } from 'react';
import {observer} from 'mobx-react';
import store from './store.js';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';



class Q3 extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event, value){
    store.setQ3_answer(value);
  }

  render() {
    return (
      <div style={store.q3style}>
      <p>3. You will become a good learner if you ______ the tips your teachers talk about.</p>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" valueSelected={store.Q3_answer} onChange={this.handleChange} >

          <RadioButton value="A" label="(A) do" />
          <RadioButton value="B" label="(B) ask" />
          <RadioButton value="C" label="(C) answer" />
          <RadioButton value="D" label="(D) follow"/>
        </RadioButtonGroup>
      </div>
    );
  }
}

export default observer(Q3);
