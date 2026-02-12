import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { STR_SUGG_1, STR_SUGG_2, STR_SUGG_3, STR_SUGG_4 } from '../constants/strings.js';
const { Search } = Input;

const suggestedItems = [
  STR_SUGG_1,
  STR_SUGG_2,
  STR_SUGG_3,
  STR_SUGG_4,
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
