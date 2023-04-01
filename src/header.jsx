const Header = ({ selectedTeam, teamMemberCount }) => {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-B">
                    <h1 className="mt-4 p5 rounded">Team Member Allocation</h1>
                    <h3>
                        {selectedTeam} has {teamMemberCount} members
                    </h3>
                </div>
            </div>
        </header>
    );
};

export default Header;
