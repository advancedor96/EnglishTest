import React, { Component } from 'react';
import {observer} from 'mobx-react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Q1 from './Q1.js';
import Q2 from './Q2.js';
import Q3 from './Q3.js';
import store from './store.js'

class App extends Component {
  constructor(props){
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleTitleTouchTap = this.handleTitleTouchTap.bind(this);
  }

  handleNext(){
    store.goNext();
  }

  handleStart(){
    store.setIsStart(true);

  }
  handleTitleTouchTap(){
    console.log('reset...')
    store.reset();

  }


  render() {
    if(store.isStart ===false){
      let text = `開始測驗！倒數 ${store.time}秒`;
      return(
        <div>
          <AppBar
            title={<span style={{cursor: 'pointer'}}>英文測驗(重新載入)</span>}
            onTitleTouchTap={this.handleTitleTouchTap}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            titleStyle={{textAlign: "center"}}
          /><br />

          <RaisedButton label={text} primary={true}fullWidth={true} onTouchTap={this.handleStart} />

        </div>
        )
    }else{
      return (
        <div>
          <AppBar
            title={<span style={{cursor: 'pointer'}}>英文測驗(重新載入)</span>}
            onTitleTouchTap={this.handleTitleTouchTap}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            titleStyle={{textAlign: "center"}}
          /><br />
          還剩：{store.time}秒, 現在在:{store.page}頁
          <Q1 />
          <Q2 />
          <Q3 />
          <RaisedButton label={store.nextLabel} primary={true} onTouchTap={this.handleNext}/>



          {
            store.isShowingScore?<h1>總分：{store.score}</h1>:null

          }


        </div>
      );
    }
  }
}

export default observer(App);
