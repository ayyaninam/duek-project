import Navbar from '../components/RegisterLoginNavbar'

type props = {
    GoogleSVG: string,
    RegisterBG: string,
    Link: any,
}
const Register = (props: props) => {
    const mainRegisterStyling: React.CSSProperties = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.RegisterBG})`,
    }

    return (
        <div className='register__page' style={mainRegisterStyling}>
            <Navbar login={false} Link={props.Link} />
            <div className="main__register__body mt-5 w-50 d-flex justify-content-center m-auto  flex-column px-5">
                <h3>Create your account</h3>
                <p className='text-muted'>Start spending more time on your projects and less time managing your infrastructure.</p>
                <div className="all__register__inputs mt-4 ">
                    <div className="d-flex mb-4">
                        <div className="mx-2 w-50">
                            <label htmlFor="first__name" className="form-label">First Name</label>
                            <input type="text" required={true} className="form-control" id="first__name" placeholder="First Name" />
                        </div>
                        <div className="mx-2 w-50">
                            <label htmlFor="last__name" className="form-label">Last Name</label>
                            <input type="text" required={true} className="form-control" id="last__name" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="mx-2">
                        <label htmlFor="email__register" className="form-label">Email address</label>
                        <input type="email" required={true} className="form-control" id="email__register" placeholder="name@example.com" />
                    </div>
                    <div className="d-flex mt-4">
                        <div className="mx-2 w-50">
                            <label htmlFor="password__one" className="form-label">Password</label>
                            <input type="passsword" required={true} className="form-control" id="password__one" placeholder="Password" />
                        </div>
                        <div className="mx-2 w-50">
                            <label htmlFor="password__two" className="form-label">Password Again</label>
                            <input type="passsword" required={true} className="form-control" id="password__two" placeholder="Password Again" />
                        </div>
                    </div>
                    <div className="all__final__register__btns mt-4 ">
                        <props.Link to="/dashboard" className=' mb-4 sign__up__btn btn d-flex justify-content-center m-auto'>Sign up</props.Link>
                        <button className=' mb-4 p-2 login__with__google__btn btn d-flex justify-content-center m-auto'><img src={props.GoogleSVG} />&nbsp;Sign Up with Google</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register