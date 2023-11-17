import DashboardSideBar from "../components/DashboardSideBar"
import MainNavbar from "../components/MainNavbar"
import { useEffect, useState } from "react"
type props = {
    Link: any,
    Ellipsis: string,
}

const AllDroplets = (props: props) => {
    const [DropletsCount, setDropletsCount] = useState(0)
    const [projectIpAddress, setProjectIpAddress] = useState("")

    useEffect(() => {
        setDropletsCount(3)
        setProjectIpAddress("170.64.170.8")
    }, [])

    return (
        <div className="main__dashboard__div">
            <DashboardSideBar Link={props.Link} />

            <div className="main__left__portion__dashboard">
                <MainNavbar Link={props.Link} />
                <div className="droplet__list m-5">
                    <small className="droplet__counting__heading text-muted my-5">ALL YOUR DROPLETS {"(" + DropletsCount + ")"}</small>
                    <div className="all__droplets__list">
                        <div className="droplet shadow-sm rounded my-2">
                            <span className="active"></span>
                            <span>marshall</span>
                            <span>{projectIpAddress}</span>
                            <span>

                                <div className="dropdown cursor-pointer">

                                    <img src={props.Ellipsis} alt="" id="dropdown__three__dot__menu " data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                                    <div className="dropdown-menu" aria-labelledby="dropdown__three__dot__menu ">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>

                            </span>
                        </div>
                        <div className="droplet shadow-sm rounded my-2">
                            <span className="inactive"></span>
                            <span>marshall</span>
                            <span>{projectIpAddress}</span>
                            <span>

                                <div className="dropdown cursor-pointer">

                                    <img src={props.Ellipsis} alt="" id="dropdown__three__dot__menu " data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                                    <div className="dropdown-menu" aria-labelledby="dropdown__three__dot__menu ">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>

                            </span>
                        </div>
                        <div className="droplet shadow-sm rounded my-2">
                            <span className="active"></span>
                            <span>marshall</span>
                            <span>{projectIpAddress}</span>
                            <span>

                                <div className="dropdown cursor-pointer">

                                    <img src={props.Ellipsis} alt="" id="dropdown__three__dot__menu " data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                                    <div className="dropdown-menu" aria-labelledby="dropdown__three__dot__menu ">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>

                            </span>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default AllDroplets