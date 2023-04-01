import Grid from "./components/Grid";
import EmployeeCard from "./components/EmployeeCard";

const Employee = ({
    selectedTeam,
    setTeam,
    handleTeamSelectionChange,
    handleEmployeeCardClick,
    employees,
}) => {
    function generateCards(employees, selectedTeam) {
        return (
            <>
                {employees.map((employee) => (
                    <EmployeeCard
                        key={employee.id}
                        isStandout={employee.teamName === selectedTeam}
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

    function parseTeams(employees) {
        const teams = []; 

        employees.forEach((employee) => {
            console.log(employee.teamName, " in ", teams, " evals to: ", employee.teamName in teams)
            if (teams.indexOf(employee.teamName) >= 0) {
                return;
            }

            teams.push(employee.teamName);
        });
        // console.log("Teams: ",JSON.stringify(teams, null, 4));
        return teams;
    }

    parseTeams(employees);

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
};

export default Employee;
