import React from 'react';
import TextField  from 'material-ui/TextField';
import SelectField  from 'material-ui/SelectField';
import MenuItem  from 'material-ui/MenuItem';
import axios from 'axios'; 

//this component will use arrow functions to replace ".bind"
//arrow function parameter 'e' is the event

//import needed components
import Body from './Body.js';


class Search extends React.Component {
	state ={
		searchString: "",
		resultAmount: 15,
		api_url: "https://pixabay.com/api",
		api_key: "9073157-2bae580b592d90f885727f016",
		images: []
	}
	
	onTextChange = (e) => {
		const val = e.target.value;
		this.setState({[e.target.name]: val},() => {
			//if there is nothing in the search field, don't keep lingering images around
			if(val === ""){
				this.setState({images: []});
			} else{
				axios.get(`${this.state.api_url}/?key=${this.state.api_key}
					&q=${this.state.searchString}&image_type=photo&per_page=${this.state.resultAmount}&safesearch=true`)
				.then(res => this.setState({images:res.data.hits}))
				.catch(err => console.log(err));
			}


				
		});
	}

	onAmountChange = (e,index, value) => {
		this.setState({resultAmount: value});
	}
	
	render(){
		console.log(this.state.images); 
		return(
			<div>
			<TextField 
				name="searchString"
				value = {this.state.searchString}
				onChange={this.onTextChange}
				floatingLabelText="Search for an Image"
				fullWidth={true}

			/>

			<br/>
			<SelectField
				name ="resultAmount"
		        floatingLabelText="# of Images"
		        value={this.state.resultAmount}
		        onChange={this.onAmountChange}
		    >
		        <MenuItem value={10} primaryText="10" />
		        <MenuItem value={20} primaryText="20" />
		        <MenuItem value={30} primaryText="30" />
		        <MenuItem value={40} primaryText="40" />
		        <MenuItem value={50} primaryText="50" />
        	</SelectField>

        <br/>

        {this.state.images.length >0 ? (<Body images={this.state.images}  />) : null}


			</div>
			
		);
		
	}
		
}


export default Search;