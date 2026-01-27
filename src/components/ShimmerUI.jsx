import {Skeleton, Row, Divider} from 'antd';

const SKELETON_COUNT = 8;

export const ShimmerUI = (props) =>{
	return (
		<div className="grid-container">
			<Divider titlePlacement="middle">Finding Images</Divider>
			<Row className="row">
				{Array.from({length: SKELETON_COUNT }).map((_, index) => (
					<Skeleton.Image 
						className = "skeleton-card"
						style = {{width: 300, height: 200}}
						key = {index}
						active = {props.loading}
					/>))}
			</Row>
		</div>
	)
}
