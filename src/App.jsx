import "./App.css";
import { useState, useEffect } from "react";

import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";

import employeeData from "./SampleData.json";

export default function App() {
    //Stateful data and such
    const [selectedTeam, setTeam] = useState(
        JSON.parse(localStorage.getItem("selectedTeam")) || "Team A"
    );

    const [employees, setEmployees] = useState(
        JSON.parse(localStorage.getItem("employeeList")) || JSON.parse(employeeData) || []
    );

    useEffect(
        () => {
            localStorage.setItem("employeeList", JSON.stringify(employees));
        },
        /*We want the effect to run when an employee's team changes to store the change in local storage*/ [
            employees,
        ]
    );

    useEffect(() => {
        localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
    }, [selectedTeam]);

    //Handling stuff

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
