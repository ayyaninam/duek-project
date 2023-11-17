import { useEffect, useState } from "react"
type props = {
    Ellipsis: string,
}
const ProjectDetail = (props: props) => {
    const [projectName, setProjectName] = useState("")
    // const [projectOwnerName, setProjectOwnerName] = useState("Marshall")
    const [projectIpAddress, setProjectIpAddress] = useState("")
    const [DropletsCount, setDropletsCount] = useState(0)

    const [CurrentTab, setCurrentTab] = useState("res")

    useEffect(() => {
        setProjectName("Project #1")
        setProjectIpAddress("170.64.170.8")
        setDropletsCount(3)
    }, [])

    return (
        <div className="mainproject__details__div m-5">
            <div className="top__Div__under__mainproject__detail d-flex justify-content-between">
                <div className="left__information__top__Div__under__mainproject__detail d-flex flex-column">
                    <h3 className="text-muted">{projectName}</h3>
                    <span className="text-muted">Update your project information under Settings</span>
                </div>
                <div className="right__information__top__Div__under__mainproject__detail">
                    <button className="btn btn-light p-3">Move Resources</button>
                </div>
            </div>
            <div className=" mt-5 menu__shift__of__project__Dashboard w-25 d-flex justify-content-between">
                <span className="text-dark menu__shifter__link cursor-pointer" onClick={() => setCurrentTab('res')} >Resources</span>
                <span className="text-dark menu__shifter__link cursor-pointer" onClick={() => setCurrentTab('act')}>Activity</span>
                <span className="text-dark menu__shifter__link cursor-pointer" onClick={() => setCurrentTab('set')}>Settings</span>
            </div>
            {CurrentTab == "res" && (
                <div className="droplet__list mt-3">
                    <small className="droplet__counting__heading text-muted">DROPLETS {"(" + DropletsCount + ")"}</small>
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

                    <div className="learn__more__and__other__services my-5">
                        <div className="left__side__other__things">
                            <div className="create__something__new main__list__under__left">
                                <h6>Create Something New</h6>
                                <div>
                                    <li>
                                        <span>
                                            <img src="https://ui-cdn.digitalocean.com/aurora/assets/images/resource-cards/bucket-77c4f2d53f672ac45697a3db4aa5518e.svg" alt="" />
                                        </span>
                                        <span>
                                            <a href="">Product Docs</a>
                                            <p >Technical overviews, how-tos, release notes, and support material</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img src="https://ui-cdn.digitalocean.com/aurora/assets/images/resource-cards/bucket-77c4f2d53f672ac45697a3db4aa5518e.svg" alt="" />
                                        </span>
                                        <span>
                                            <a href="">Product Docs</a>
                                            <p >Technical overviews, how-tos, release notes, and support material</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img src="https://ui-cdn.digitalocean.com/aurora/assets/images/resource-cards/bucket-77c4f2d53f672ac45697a3db4aa5518e.svg" alt="" />
                                        </span>
                                        <span>
                                            <a href="">Product Docs</a>
                                            <p >Technical overviews, how-tos, release notes, and support material</p>
                                        </span>
                                    </li>
                                </div>
                            </div>
                            <div className="create__something__new main__list__under__left">
                                <h6>Build on What you have</h6>
                                <div>
                                    <li>
                                        <span>
                                            <img src="https://ui-cdn.digitalocean.com/aurora/assets/images/resource-cards/bucket-77c4f2d53f672ac45697a3db4aa5518e.svg" alt="" />
                                        </span>
                                        <span>
                                            <a href="">Product Docs</a>
                                            <p >Technical overviews, how-tos, release notes, and support material</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img src="https://ui-cdn.digitalocean.com/aurora/assets/images/resource-cards/bucket-77c4f2d53f672ac45697a3db4aa5518e.svg" alt="" />
                                        </span>
                                        <span>
                                            <a href="">Product Docs</a>
                                            <p >Technical overviews, how-tos, release notes, and support material</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img src="https://ui-cdn.digitalocean.com/aurora/assets/images/resource-cards/bucket-77c4f2d53f672ac45697a3db4aa5518e.svg" alt="" />
                                        </span>
                                        <span>
                                            <a href="">Product Docs</a>
                                            <p >Technical overviews, how-tos, release notes, and support material</p>
                                        </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="right__side__learn__more my-5">
                            <h6>Learn More</h6>
                            <span>
                                <li>
                                    <a href="">Product Docs</a>
                                    <p >Technical overviews, how-tos, release notes, and support material</p>
                                </li>
                                <li>
                                    <a href="">Product Docs</a>
                                    <p >Technical overviews, how-tos, release notes, and support material</p>
                                </li>
                                <li>
                                    <a href="">Product Docs</a>
                                    <p >Technical overviews, how-tos, release notes, and support material</p>
                                </li>
                                <li>
                                    <a href="">Product Docs</a>
                                    <p >Technical overviews, how-tos, release notes, and support material</p>
                                </li>
                                <li>
                                    <a href="">Product Docs</a>
                                    <p >Technical overviews, how-tos, release notes, and support material</p>
                                </li>
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {CurrentTab == "act" && (
                <div className="activity__tab__main mt-5">
                    <ul>
                        <span className="header__of__activity">
                            <li className="">Event</li>
                            <li>Date</li>
                        </span>
                        <span className="record">
                            <li className="">marshall snapshot taken by Jye Marshall</li>
                            <li>15 days ago</li>
                        </span>
                        <span className="record">
                            <li className="">marshall snapshot taken by Jye Marshall</li>
                            <li>15 days ago</li>
                        </span>
                        <span className="record">
                            <li className="">marshall snapshot taken by Jye Marshall</li>
                            <li>15 days ago</li>
                        </span>
                        <span className="record">
                            <li className="">marshall snapshot taken by Jye Marshall</li>
                            <li>15 days ago</li>
                        </span>
                    </ul>
                </div>
            )}
            {CurrentTab == "set" && (
                <div className="setting__tab__main mt-5 w-50">
                    <h3>Project Detail</h3>
                    <div className="my-4">
                        <label htmlFor="project__name" className="form-label">Project Name</label>
                        <input type="text" className="form-control" id="project__name" placeholder="Name" />
                    </div>
                    <div className="my-4">
                        <label htmlFor="project__desc" className="form-label">Project Description</label>
                        <textarea className="form-control" id="project__desc" placeholder="Description" ></textarea>
                    </div>
                    <button className="btn btn-success">Save</button>
                    <hr />
                    <div className="delete__project__section mt-5">
                        <span>
                            <h5>Delete project</h5>
                            <p>To delete a project, you must move or delete all resources within it. Default project cannot be deleted.</p>
                        </span>
                        <span>
                            <button className="btn btn-danger">DELETE Project</button>
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectDetail