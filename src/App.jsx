import "./App.css";
import { useState, useEffect } from "react";

import Header from "./header";
import Employees from "./Employees";
import Footer from "./footer";

export default function App() {
    //Stateful data and such
    const [selectedTeam, setTeam] = useState(
        JSON.parse(localStorage.getItem("selectedTeam")) || "Team A"
    );

    const [employees, setEmployees] = useState(
        // JSON.parse(localStorage.getItem("employeeList")) || 
        [
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
        ]
    );

    useEffect(
        () => {
            console.log(JSON.stringify(employees));
            localStorage.setItem("employeeList", JSON.stringify(employees));
        },
        /*We want the effect to run when an employee's team changes to store the change in local storage*/ [
            employees,
        ]
    );

    useEffect(() => {
        console.log(JSON.stringify(selectedTeam));
        localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
    }, [selectedTeam]);

    function handleTeamSelectionChange(event) {
        setTeam(event.target.value);
    }

    function handleEmployeeCardClick(event) {
        const transformedEmployees = employees.map((employee) =>
            employee.id === parseInt(event.currentTarget.id)
                ? employee.teamName === selectedTeam
                    ? { ...employee, teamName: "" }
                    : { ...employee, teamName: selectedTeam }
                : employee
        );
        setEmployees(transformedEmployees);
    }

    return (
        <>
            <Header
                selectedTeam={selectedTeam}
                teamMemberCount={
                    employees.filter(
                        (employee) => employee.teamName === selectedTeam
                    ).length
                }
            />
            <Employees
                selectedTeam={selectedTeam}
                setTeam={setTeam}
                handleTeamSelectionChange={handleTeamSelectionChange}
                handleEmployeeCardClick={handleEmployeeCardClick}
                employees={employees}
            />
            <Footer />
        </>
    );
}
