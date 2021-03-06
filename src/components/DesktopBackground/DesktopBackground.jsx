import React from "react";

import "./desktop-background.scss";

const DesktopBackground = () => {
    return (
        <div className="desktop-background">
            <div className="left-container">
                <img className="top-corner" src="/icon/strawberries_icon.jpg" alt="" />
                <img className="middle-center" src="/icon/sparkles_icon.jpg" alt="" />
            </div>
            <div className="right-container">
                <img className="top-corner" src="/icon/strawberries_icon.jpg" alt="" />
                <img className="middle-center" src="/icon/sparkles_icon.jpg" alt="" />
            </div>
        </div>
    );
};

export default DesktopBackground;
