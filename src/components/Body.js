import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';



class Body extends React.Component {
	state ={
		dialogOpen: false,
		currentImg: ""

	}

	handleOpen = (img)  => {
		this.setState({dialogOpen:true, currentImg: img});
	}

	handleClose = () => {
		this.setState({dialogOpen:false});
	}

	render(){
		let imageListContent;
		if(this.props.images){
			imageListContent = (
				<GridList cols ={3}>
					{this.props.images.map(img => (
						<GridTile 
						title={img.tags} 
						key={img.id} 
						subtitle ={<span>by {img.user}</span>}      
						actionIcon = {
							<IconButton onClick = {() => this.handleOpen(img.largeImageURL)}>
								<ZoomIn color ="blue"/>
							</IconButton>
						}
						>	
						<img src ={img.largeImageURL}  />
						</GridTile>
						
						))}
				</GridList>
			)
		}
		else{
			imageListContent = null;
		}

		//dialog logic
		const actions = [
			<FlatButton label ="Close" primary={true} onClick = {this.handleClose} />
		]


		return(
			<div>
			{imageListContent}
			<Dialog 
				actions={actions}
				modal={false}
				open = {this.state.dialogOpen}
				onRequestClose={this.handleClose}>
			<img src={this.state.currentImg} style={{width: '100%'}}/>

			</Dialog>
			</div>
		);	
	}
	
	
		
}


export default Body;