import { STR_WELCOME, STR_TAGLINE } from '../constants/strings.js';
export const Welcome = () => {
  return <div className="welcome-container">
        <div className="welcome-text">{STR_WELCOME}</div>
        <div className="welcome-text2">{STR_TAGLINE}</div>
    </div>
};
