import { Input } from "antd";

const { Search } = Input;

export const SearchBox = (props) => {
  return (
    <div className="search-bar-container">
      <Search
        className="search-bar"
        placeholder="Search items"
        enterButton="Search"
        size="large"
        disabled={props.loading}
        loading={props.loading}
        onSearch={props.onSearch}
        allowClear
      />
    </div>
  );
};
