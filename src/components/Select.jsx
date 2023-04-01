import React from "react";
import SelectOption from "./SelectOption";

const Select = ({ values, defaultVal, onChange }) => {
    return (
        <div className="row justify-content mt-3 mb-3">
            <div className="col-B">
                <select
                    className="form-select form-select-lg"
                    value={defaultVal}
                    onChange={onChange}
                >
                    {values.map((val) => (
                        <SelectOption
                            key={val.value}
                            value={val.value}
                            label={val.label}
                        />
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Select;
