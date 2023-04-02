import Grid from "./components/Grid";
import EmployeeCard from "./components/EmployeeCard";
import Select from "./components/Select";

const Employee = ({
    selectedTeam,
    setTeam,
    handleTeamSelectionChange,
    handleEmployeeCardClick,
    employees,
    teams
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

    return (
        <main className="container" style={{maxWidth: "min(80vw, 1000px)"}}>
            <Select
                defaultVal={selectedTeam}
                onChange={handleTeamSelectionChange}
                values={teams.map((team) => ({
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
