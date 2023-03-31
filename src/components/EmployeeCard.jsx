import React from "react";

import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";

const EmployeeCard = ({fullName, id, gender, designation}) => {
    return (
        <div
            id={id}
            className="card m-2"
            style={{ cursor: "pointer" }}
        >
            <img
                src={gender === "male" ? maleProfile : femaleProfile}
                alt="profile image"
                className="card-img-top"
            />
            <div className="card-body">
                <h5 className="card-title">Full Name: {fullName}</h5>
                <p className="card-text">
                    <b>Designation: </b>
                    {designation}
                </p>
            </div>
        </div>
    );
};

export default EmployeeCard;
