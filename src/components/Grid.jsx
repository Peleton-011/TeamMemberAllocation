import React from "react";

const Grid = ({ content, size }) => {
    return (
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-B">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
                    }}
                >
                    {content()}
                </div>
            </div>
        </div>
    );
};

export default Grid;
