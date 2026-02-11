import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

// dummy suggestions

const suggestedItems = [
  "Bedroom with red wall",
  "Bathroom with yellow wall",
  "Green Backyard",
  "Living Room with white ceiling fan",
];

export const SearchBox = (props) => {
  return (
    <div className="search-bar-container">
      <div className="search-row">
        <SearchOutlined className="search-icon" />
        <Search
          className="search-bar"
          placeholder="Search items"
          enterButton={
            <Button type="primary">
              Search
            </Button>
          }
          size="large"
          disabled={props.loading}
          loading={props.loading}
          onSearch={props.onSearch}
          allowClear
        />
      </div>
      <div className="search-suggestions">
        {suggestedItems?.map((item) => (
          <div
            className="search-suggested-items"
            onClick={() => props.onSearch(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
