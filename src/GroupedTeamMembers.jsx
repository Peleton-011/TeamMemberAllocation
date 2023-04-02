import React from "react";
import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam, teams }) => {
    const [groupedEmployees, setGroupData] = useState(groupTeamMembers(employees, teams));

    function groupTeamMembers(employees, teams) {GroupedTeamMembers
        const groupedTeams = [];
        for (let i = 0; i < teams.length; i++) {
            const team = teams[i];
            const teamEmployees = employees.filter(
                (employee) => employee.teamName === team
            );

            const teamObj = {
                team: team,
                members: teamEmployees,
                collapsed: selectedTeam === team ? false : true,
            };

            groupedTeams.push(teamObj);
        }

        return groupedTeams;
    }

    function handleTeamClick(event) {
        let newGroupData = groupedEmployees.map((groupedData) =>
            groupedData.team === event.currentTarget.id
                ? { ...groupedData, collapsed: !groupedData.collapsed }
                : groupedData
        );
        setGroupData(newGroupData);
        setTeam(event.currentTarget.id);
    }

    return (
        <main className="container">
            {groupedEmployees.map((item) => {
                return (
                    <div
                        key={item.team}
                        className="card mt-2"
                        style={{ cursor: "pointer" }}
                    >
                        <h4
                            id={item.team}
                            className="card-header text-secondary bg-white"
                            onClick={handleTeamClick}
                        >
                            Team Name: {item.team}
                        </h4>
                        <div
                            id={"collapse_" + item.team}
                            className={item.collapsed ? "collapsed" : ""}
                        >
                            <hr />
                            {item.members.map((member) => {
                                return (
                                    <div className="mt-2">
                                        <h5 className="card-title mt-2">
                                            <span className="text-dark">
                                                Full name: {member.fullName}
                                            </span>
                                        </h5>
                                        <p>Designation: {member.designation}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-B">
                    <h1 className="mt-4 p5 rounded">Grouped Team Members</h1>
                </div>
            </div>
        </main>
    );
};

export default GroupedTeamMembers;
