import { useState, useEffect } from 'react';
import { Input } from 'antd';
import {Grid} from './Grid.jsx';
import {ShimmerUI} from './ShimmerUI.jsx';

const { Search } = Input;

const dbarray = ["kohli", "anderson", "williamson", "yadav", "root", "kartik", "tambe"];

export const SearchBox = (props) => {
	return (
		<div className="search-bar-container">
			<Search 
				className="search-bar"
				placeholder = "Search items" 
				enterButton = "Search"
				size= "large"
				disabled = {props.loading}
				loading = {props.loading}
				onSearch = {props.onSearch}
				allowClear
			/>	
		</div>		
	)
}
