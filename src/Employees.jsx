import Grid from "./components/Grid";
import EmployeeCard from "./components/EmployeeCard";
import Select from "./components/Select";

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
            if (teams.indexOf(employee.teamName) >= 0) {
                return;
            }

            teams.push(employee.teamName);
        });
        return teams;
    }

    return (
        <main className="container">
            <Select
                defaultVal={selectedTeam}
                onChange={handleTeamSelectionChange}
                values={parseTeams(employees).map((team) => ({
                    value: team,
                    label: team,
                }))}
            />

            <Grid
                size={3}
                content={() => (
                    <>
                        {generateCards(
                            employees,
                            selectedTeam,
                            setTeam
                        )}
                    </>
                )}
            />
        </main>
    );
};

export default Employee;
