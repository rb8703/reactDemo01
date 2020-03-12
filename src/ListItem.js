import React from 'react'

class ListItem extends React.Component{

	constructor(props) {
    super(props);
  }

render(){
	return(
			<div>
				<ul>
				{
					this.props.liList.map((item,index)=>(
							<li key={item} onClick={()=>this.props.handleItemDelete(index)}> {item}</li>
							) 
						)
				}
				</ul>
			</div>
			)
		}
}

export default ListItem
