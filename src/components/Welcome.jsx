import { STR_WELCOME, STR_TAGLINE } from "../constants/strings.js";
export const Welcome = (props) => {
    return (
        <div className="welcome-container">
            <div className="welcome-text">{STR_WELCOME}</div>
        </div>
    );
};
