const NotFound = ({ selectedTeam, teamMemberCount }) => { 
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-B">
                    <h1 className="text-danger">404 - Page not found</h1>
                    <h5>
                        This page could not be found. Please try a different adress or try again later.
                    </h5>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
