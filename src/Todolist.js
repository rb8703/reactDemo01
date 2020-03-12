
import React from 'react';
import ListItem from './ListItem'

class Todolist extends React.Component {

constructor(props) {
    super(props);

    this.state={
    	inputValue:'',
    	liList:[]
    }
  }

  handleClick(e){
		// console.log("点击按钮")	;
		if (this.state.inputValue==="") {
			return;
		}
		this.setState({
  		liList:[...this.state.liList,this.state.inputValue],
  		inputValue:""
  	})

  }

  handleInputChange(e){
  	// console.log(e.target.value);
  	this.setState({
  		inputValue:e.target.value
  	})
  }

  handleItemDelete(index){
  		console.log(index);
  		let newLiList=this.state.liList;
  		newLiList.splice(index,1);

  		this.setState({
  		liList:newLiList,
  		inputValue:""
  	})

  }

  render() {
    return (<div>
    	<input onChange={this.handleInputChange.bind(this)} value={this.state.inputValue}  ></input>
    	<button onClick={this.handleClick.bind(this)}  >提交</button>
    	<ListItem liList={this.state.liList} handleItemDelete={this.handleItemDelete.bind(this)} />
    </div>);
    
  }

}
 export default Todolist