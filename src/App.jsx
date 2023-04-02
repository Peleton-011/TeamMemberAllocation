import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Employees from "./Employees";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import NotFound from "./components/NotFound";

import employeeData from "./SampleData.json";
import GroupedTeamMembers from "./GroupedTeamMembers";

export default function App() {
    //Stateful data and such
    const [selectedTeam, setTeam] = useState(
        JSON.parse(localStorage.getItem("selectedTeam")) || "Team A"
    );

    const [employees, setEmployees] = useState(
        JSON.parse(localStorage.getItem("employeeList")) ||
            JSON.parse(employeeData) ||
            []
    );

    const [teams, setTeams] = useState(parseTeams(employees));

    function parseTeams(employees) {
        const teams = [];

        employees.forEach((employee) => {
            if (teams.indexOf(employee.teamName) >= 0) {
                return;
            }

            teams.push(employee.teamName);
        });
        return teams;
    }

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
        <Router>
            <Navigation />
            <Header
                selectedTeam={selectedTeam}
                teamMemberCount={
                    employees.filter(
                        (employee) => employee.teamName === selectedTeam
                    ).length
                }
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Employees
                            selectedTeam={selectedTeam}
                            setTeam={setTeam}
                            employees={employees}
                            handleTeamSelectionChange={
                                handleTeamSelectionChange
                            }
                            handleEmployeeCardClick={handleEmployeeCardClick}
                            teams={teams}
                        />
                    }
                ></Route>
                <Route
                    path="/GroupedTeamMembers"
                    element={
                        <GroupedTeamMembers
                            selectedTeam={selectedTeam}
                            setTeam={setTeam}
                            employees={employees}
                            teams={teams}
                        />
                    }
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}
