import { Divider, Row } from "antd";
import { CardItem } from "./CardItem.jsx";

export const Grid = (props) => {
  return (
    <div className="grid-container">
      <Divider className="divider" titlePlacement="middle">
        Search Results
      </Divider>
      <Row className="row">
        {props?.imgArray?.map((image, index) => (
          <CardItem title={image?.title} key={index} src={image?.url} />
        ))}
      </Row>
    </div>
  );
};
