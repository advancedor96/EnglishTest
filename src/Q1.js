import React, { Component } from 'react';
import {observer} from 'mobx-react';
import store from './store.js';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


class Q1 extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event, value){
    store.setQ1_answer(value);
  }

  render() {
    return (
      <div style={store.q1style}>
      <p>1. My son's birthday is coming. I want to buy him a computer as a birthday _______.</p>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" valueSelected={store.Q1_answer} onChange={this.handleChange} >
          <RadioButton value="A" label="(A) place" />
          <RadioButton value="B" label="(B) party" />
          <RadioButton value="C" label="(C) poster" />
          <RadioButton value="D" label="(D) present"/>
        </RadioButtonGroup>
      </div>
    );
  }
}

export default observer(Q1);
