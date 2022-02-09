import React from "react";
import HalfScreenBtn from "./HalfScreenBtn/HalfScreenBtn";
import "./buttons.scss";

const Buttons = () => {
    return (
        <div className="buttons-fixed">
            <div className="buttons">
                <HalfScreenBtn
                    btnText="Find us"
                    link="/find-us"
                    icon="/icons/icons8-home-address-60.svg"
                    btnRectStyle={{ backgroundColor: "white" }}
                    btnTextStyle={{ color: "black" }}
                />
                <HalfScreenBtn
                    btnText="Menu"
                    link="/menu"
                    btnRectStyle={{ backgroundColor: "black", marginLeft: "9px" }}
                    btnTextStyle={{ color: "white" }}
                />
            </div>
        </div>
    );
};

export default Buttons;
