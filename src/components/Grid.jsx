import { Col, Divider, Card, Row, Skeleton, Image } from 'antd';
import {useState, useEffect} from 'react';
import {CardItem } from './CardItem.jsx';
import {ShimmerUI} from './ShimmerUI.jsx';

const {Meta} = Card;

const SKELETON_COUNT = 8;

export const Grid = (props) =>{
	return (
		<div className="grid-container"> 
			<Divider className="divider" titlePlacement="middle">Search Results</Divider>
			<Row className="row">
				{props?.imgArray?.map((image, index) => (
					<CardItem 
						title = {image?.title}
						key = {index}
						src = {image?.url}
					/>
				))}
			</Row>
		</div>
	);
}
