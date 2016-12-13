import {observable} from 'mobx';
import {action} from 'mobx';
import _ from 'lodash';

let store = observable({
	time : 10,
	t_id : null,
	page : 1,

	isStart: false,


	q1style:{display:'block'},
	q2style:{display:'none'},
	q3style:{display:'none'},
	nextLabel : "下一題",
	Q1_answer : "",
	Q2_answer : "",
	Q3_answer : "",

	score: 0,
	isShowingScore : false,
	isLoading : false

});



function setPage(val){

	store.page = val;
	if(store.page===1){
		store.q1style = {display:'block'};
		store.q2style = {display:'none'};
		store.q3style = {display:'none'};
	}else if(store.page===2){
		store.q1style = {display:'none'};
		store.q2style = {display:'block'};
		store.q3style = {display:'none'};
	}else if(store.page===3){
		store.q1style = {display:'none'};
		store.q2style = {display:'none'};
		store.q3style = {display:'block'};

		store.nextLabel = "完成"
	}
}

function countDown(){
    store.t_id=setInterval(function(){
    	store.time-- ;
      // alert('time up');
      //
      if(store.time ===0){

      	clearInterval(store.t_id);
      	store.calcualte_score()
      }
    }
    ,1000);

}

_.assign(store, {

	reset:action(function(){
		clearInterval(store.t_id);

		this.time = 5
		this.t_id = null
		this.page = 1
		this.isStart= false
		this.q1style={display:'block'}
		this.q2style={display:'none'}
		this.q3style={display:'none'}
		this.nextLabel = "下一題"
		this.Q1_answer = ""
		this.Q2_answer = ""
		this.Q3_answer = ""
		this.score= 0
		this.isShowingScore = false
		this.isLoading = false
	}),

	goNext:action(function(){
		if(this.page===3){
			console.log('計算分數')
			this.calcualte_score();
		}else{
			console.log('設定頁數：', this.page+1)
			setPage(this.page+1);
		}
	}),

	setPage:action(function(val){
		setPage(val);
	}),

	startCountDown:action(function(){
		countDown();
	}),

	setQ1_answer:action(function(val){
		this.Q1_answer = val;
	}),

	setQ2_answer:action(function(val){
		this.Q2_answer = val;
	}),

	setQ3_answer:action(function(val){
		this.Q3_answer = val;
	}),

	setIsStart:action(function(val){
		this.isStart = val;
    	this.startCountDown();
	}),

	calcualte_score:action(function(){
		this.isLoading = true;

		this.score = 0;

		if(this.Q1_answer ==="D"){
			this.score +=33;
		}
		if(this.Q2_answer ==="C"){
			this.score +=33;
		}
		if(this.Q3_answer ==="D"){
			this.score +=34;
		}

		console.log('this.Q1_answer', this.Q1_answer)
		console.log('this.Q2_answer', this.Q2_answer)
		console.log('this.Q3_answer', this.Q3_answer)

		console.log('總分：', this.score);

		this.isShowingScore = true;
		this.isLoading = false;

	})


})
export default store;
