import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
    STR_SUGG_1,
    STR_SUGG_2,
    STR_SUGG_3,
    STR_SUGG_4,
    STR_SUGG_5,
    STR_TAGLINE,
    STR_WELCOME_LINE,
} from "../constants/strings.js";
const { Search } = Input;

const suggestedItems = [STR_SUGG_1, STR_SUGG_2, STR_SUGG_3, STR_SUGG_4];

export const SearchBox = (props) => {
    return (
        <div
            className={
                props?.visibility
                    ? "search-bar-container"
                    : "search-bar</h1-container bg"
            }
        >
            <div className="search-bar-title">
                <h1>{STR_WELCOME_LINE}</h1>
            </div>
            <div className="search-bar-desc">{STR_TAGLINE}</div>
            <div className={props?.visibility ? "search-row" : "search-row bd"}>
                <SearchOutlined className="search-icon" />
                <Search
                    className="search-bar"
                    placeholder="Search items"
                    enterButton={<Button type="primary">Search</Button>}
                    size="large"
                    disabled={props.loading}
                    loading={props.loading}
                    onSearch={props.onSearch}
                    allowClear
                    value={props?.value}
                    onChange={(e) => props?.setValue(e.target.value)}
                />
            </div>
            <div className="search-suggestions">
                <div style={{ padding: 10, fontWeight: "300" }}>Examples:</div>
                {suggestedItems?.map((item) => (
                    <div
                        className="search-suggested-items"
                        key={item}
                        onClick={() => props.onSearch(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};
