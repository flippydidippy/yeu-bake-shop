import React from "react";
import HalfScreenBtn from "./HalfScreenBtn/HalfScreenBtn";
import "./buttons.scss";

const Buttons = ({btn2Text, btn2Link}) => {

    if(btn2Link == null) {
        btn2Link="/menu"
    }
    if(btn2Text == null) {
        btn2Text="Menu"
    }

    return (
        <div className="buttons-fixed">
            <div className="buttons">
                <HalfScreenBtn
                    btnText="Find us"
                    link="/find-us"
                    icon="/icon/icon8-home-address-60.svg"
                    btnRectStyle={{ backgroundColor: "white" }}
                    btnTextStyle={{ color: "black" }}
                />
                <HalfScreenBtn
                    btnText={btn2Text}
                    link={btn2Link}
                    btnRectStyle={{ backgroundColor: "black", marginLeft: "9px" }}
                    btnTextStyle={{ color: "white" }}
                />
            </div>
        </div>
    );
};

export default Buttons;
