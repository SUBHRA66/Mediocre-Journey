import { Card, Image } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { formatTitle } from "../util/format.js";
const { Meta } = Card;

export const CardItem = (props) => {
  const formattedTitle = formatTitle(props.title);

  return (
    <>
      <Card
        className="card-container"
        hoverable
        cover={<Image className="card-image" src={props.src} alt="image" />}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Meta className="card-title" title={formattedTitle} />
          <a href={props.src} target="_blank" rel="noopener noreferrer">
            <LinkOutlined style={{ cursor: "pointer" }} />
          </a>
        </div>
      </Card>
    </>
  );
};
