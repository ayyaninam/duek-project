type props = {
    Link: any,
}

const MainNavbar = (props: props) => {
    return (
        <div className='main__navbar shadow-sm'>
            <span className="d-flex justify-content-center align-items-center">
                <i className="fa fa-search"></i>
                <input type="text" className='main__nav__search w-100' placeholder='Search By resource name or public Ip' />
            </span>
            <div className="left__other__main__navbar">
                <div className="btn-group">
                    <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        DROPLET
                    </button>
                    <ul className="dropdown-menu">
                        <li><props.Link className="dropdown-item" to="/create-droplet">Create</props.Link></li>
                    </ul>
                </div>
                <i className="fa fa-info-circle cursor-pointer" style={{ fontSize: "22px" }}></i>
                <i className="fa fa-bell cursor-pointer" style={{ fontSize: "22px" }}></i>
                <div className="vl"></div>

                <div className="all__profile__menu__left__main__dashboard__nav">
                    <span className=" mx-3 d-flex flex-column align-items-end left__of__all__profile__menu__left__main__dashboard__nav">
                        <b>My Team</b>
                        <a className="link cursor-pointer">Free Trail Active</a>
                    </span>
                    <span className="right__of__all__profile__menu__left__main__dashboard__nav">
                        <a className="nav-link dropdown-toggle d-flex align-items-center" id="profile__picture__main__header"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle"
                                height="50" alt="Avatar" loading="lazy" />
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="profile__picture__main__header">
                            <li>
                                <props.Link className="dropdown-item" to="/all-droplets">My Droplets</props.Link>
                            </li>
                            <li>
                                <props.Link className="dropdown-item" to="/login">Logout</props.Link>
                            </li>
                        </ul>
                    </span>

                </div>

            </div>
        </div>
    )
}

export default MainNavbar