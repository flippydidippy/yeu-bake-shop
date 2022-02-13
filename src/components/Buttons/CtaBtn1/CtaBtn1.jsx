import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const CtaBtn1 = ({ btnText, btnRectStyle, btnTextStyle, link, icon, href }) => {
    if (href == null) {
        href = false;
    }

    return href ? (
        <a href={link}>
            <div className="CtaBtn1" style={btnRectStyle}>
                <p style={btnTextStyle}>{btnText}</p>
                {icon && <img src={icon} alt={btnText} />}
            </div>
        </a>
    ) : (
        <Link to={link}>
            <div className="CtaBtn1" style={btnRectStyle}>
                <p style={btnTextStyle}>{btnText}</p>
                {icon && <img src={icon} alt={btnText} />}
            </div>
        </Link>
    );
};

export default CtaBtn1;
