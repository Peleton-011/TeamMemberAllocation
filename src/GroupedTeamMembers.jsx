import React from "react";
import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam, teams }) => {

    const [groupedEmployees, setGroupData] = useState(
        groupTeamMembers(employees, teams)
    );

    function groupTeamMembers(employees, teams) {
        GroupedTeamMembers;
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
        console.log("Team \"" + event.currentTarget.id + "\" clicked");
        let newTeamData = groupedEmployees.map((teamData) =>
            teamData.team === event.currentTarget.id
                ? { ...teamData, collapsed: !teamData.collapsed }
                : teamData
        );

        console.log(JSON.stringify(groupedEmployees, null, 4));
        console.log(JSON.stringify(newTeamData, null, 4));
        setGroupData(newTeamData);
        setTeam(event.currentTarget.id);
    }

    return (
        <main className="container">
            {groupedEmployees.map((thisTeam) => (
                <div
                    key={thisTeam.team}
                    className="card mt-2"
                    style={{ cursor: "pointer" }}
                >
                    <h4
                        id={thisTeam.team}
                        className="card-header text-secondary bg-white"
                        onClick={handleTeamClick}
                    >
                        Team Name: {thisTeam.team}
                    </h4>
                    <div
                        id={"collapse_" + thisTeam.team}
                        className={thisTeam.collapsed ? "collapse" : ""}
                    >
                        <hr />
                        {thisTeam.members.map((member) => {
                            return (
                                <div className="mt-2" key={member.id}>
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
            ))}
        </main>
    );
};

export default GroupedTeamMembers;
