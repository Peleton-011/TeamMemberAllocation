import { useState } from "react";

import Grid from "./components/Grid";
import EmployeeCard from "./components/EmployeeCard";

const Employee = () => {
    const [selectedTeam, setTeam] = useState("Team A");

    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "Team A",
        },
        {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "Team A",
        },
        {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "Team A",
        },
        {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "Team B",
        },
        {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "Team B",
        },
        {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "Team B",
        },
        {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "Team C",
        },
        {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "Team C",
        },
        {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "Team C",
        },
        {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "Team D",
        },
        {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "Team D",
        },
        {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "Team D",
        },
    ]);

    function handleTeamSelectionChange(event) {
        setTeam(event.target.value);
    }

    return (
        <main className="container">
            <div className="row justify-content mt-3 mb-3">
                <div className="col-B">
                    <select
                        className="form-select form-select-lg"
                        value={selectedTeam}
                        onChange={handleTeamSelectionChange}
                    >
                        <option value="Team A">Team A</option>
                        <option value="Team B">Team B</option>
                        <option value="Team C">Team C</option>
                        <option value="Team D">Team D</option>
                    </select>
                </div>
            </div>

            <Grid
                size={3}
                content={() => (
                    <>
                        {generateCards(
                            employees,
                            /*Maybe not needed ->*/ selectedTeam,
                            setTeam
                        )}
                    </>
                )}
            />
        </main>
    );

    function handleEmployeeCardClick(event) {
        const transformedEmployees = employees.map((employee) =>
            employee.id === parseInt(event.currentTarget.id)
                ? employee.TeamName === selectedTeam
                    ? { ...employee, TeamName: "" }
                    : { ...employee, TeamName: selectedTeam }
                : employee
        );

        setEmployees(transformedEmployees);
    }

    function generateCards(
        employees,
        /*Maybe not needed ->*/ selectedTeam,
        setTeam
    ) {
        return (
            <>
                {employees.map((employee) => (
                    <EmployeeCard
                        isStandout={employee.TeamName === selectedTeam}
                        fullName={employee.fullName}
                        id={employee.id}
                        gender={employee.gender}
                        designation={employee.designation}
                        onClick={handleEmployeeCardClick}
                    />
                ))}
            </>
        );
    }
};

export default Employee;
