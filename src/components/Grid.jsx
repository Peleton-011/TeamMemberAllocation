import React from "react";

const Grid = ({ content, size }) => {
    return (
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-B">
                <div style={{display: "grid", gridTemplateColumns: `repeat(${size || 3}, 1fr)`}}>{content()}</div>
            </div>
        </div>
    );
};

export default Grid;
