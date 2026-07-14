import React, { useState } from "react";

const Selection = ({ applyColor }) => {

    const [style, updateSelectionStyle] = useState({
        background: ""
    });

    return (
        <div
            className="fix-box"
            style={style}
            onClick={() => {
                console.log("Box clicked");
                applyColor(updateSelectionStyle);
            }}
        />
    );
};

export default Selection;