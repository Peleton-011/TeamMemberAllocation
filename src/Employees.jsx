import Grid from "./components/Grid";

const Employee = ({
    selectedTeam,
    setTeam,
    handleTeamSelectionChange,
    employees,
    generateCards
}) => {
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
