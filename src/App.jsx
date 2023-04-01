import "./App.css";
import { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";

import Header from "./header";
import Employees from "./Employees";
import Footer from "./footer";

export default function App() {
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

    useEffect(
        () => {
            localStorage.setItem("employeeList", JSON.stringify(employees));
        },
        /*We want the effect to run when an employee's team changes to store the change in local storage*/ [
            employees,
        ]
    );

    useEffect(
        () => {
            localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
        },
        [
            selectedTeam,
        ]
    );

    function handleTeamSelectionChange(event) {
        setTeam(event.target.value);
    }

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

    return (
        <main>
            <Header
                selectedTeam={selectedTeam}
                teamMemberCount={
                    employees.filter(
                        (employee) => employee.TeamName === selectedTeam
                    ).length
                }
            />
            <Employees
                selectedTeam={selectedTeam}
                setTeam={setTeam}
                handleTeamSelectionChange={handleTeamSelectionChange}
                employees={employees}
                generateCards={generateCards}
            />
            <Footer />
        </main>
    );
}
