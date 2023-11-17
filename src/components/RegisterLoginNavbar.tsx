
type props = {
    login: boolean,
    Link: any,
}
const Navbar = (props: props) => {
    return (
        <nav className="navbar bg-body-white shadow bg-white">
            <div className="container-fluid">
                <p className="navbar-brand">DigitalOcean Clone</p>
                <div className="d-flex">
                    <p className="mx-2">Already have an account?</p>
                    {props.login ? <props.Link to="/register" className="text-info user-select-none">Register</props.Link> : <props.Link className="text-info user-select-none" to="/login">Login</props.Link>}
                </div>
            </div>
        </nav>

    )
}

export default Navbar