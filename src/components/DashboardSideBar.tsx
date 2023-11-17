type props = {
    Link: any,
}
const DashboardSideBar = (props: props) => {
    return (
        <div className="left__sidebar__dashboard pt-5">
            <props.Link className="text-white underline-none px-3 cursor-pointer" to="/dashboard">DigitalOcean Clone</props.Link>
            <div className="menu__project__sidebar__dashboard mt-4">
                <div className="accordion" id="project__main__accord">
                    <div className="accordion-item">
                        <span className="accordion-button btn w-100" data-bs-toggle="collapse" data-bs-target="#project__main__dash__side" aria-expanded="true" aria-controls="project__main__dash__side">
                            Projects
                        </span>
                        <div id="project__main__dash__side" className="accordion-collapse collapse show" data-bs-parent="#project__main__accord">
                            <div className="accordion-body">
                                <props.Link className="btn text-dark w-100 text-start cursor-pointer" to="/dashboard">Project 1</props.Link>
                                <props.Link className="btn text-dark w-100 text-start cursor-pointer" to="/dashboard">Project 2</props.Link>
                                <props.Link className="btn text-dark w-100 text-start cursor-pointer" to="/dashboard">Project 3</props.Link>
                                <props.Link className="btn text-info w-100 text-start cursor-pointer" to="/dashboard">+ New Project</props.Link>
                            </div>
                        </div>
                    </div>

                </div><hr />
                <div className="accordion mt-3" id="manage__main__accord">
                    <div className="accordion-item">
                        <span className="accordion-button btn w-100" data-bs-toggle="collapse" data-bs-target="#manage__main__dash__side" aria-expanded="true" aria-controls="manage__main__dash__side">
                            Manage
                        </span>
                        <div id="manage__main__dash__side" className="accordion-collapse collapse show" data-bs-parent="#manage__main__accord">
                            <div className="accordion-body">
                                <props.Link to="/networking" className="btn text-dark w-100 text-start">Networking</props.Link>
                                <button className="btn text-dark w-100 text-start">Monitoring</button>
                                <button className="btn text-dark w-100 text-start">Container Registry</button>
                                <button className="btn text-dark w-100 text-start">Spaces Object Storage</button>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="other__sidebar__main__dashboard mt-3">
                    <props.Link to="/billing" className="w-100 btn text-white text-start px-3">Billing</props.Link>
                    <button className="w-100 btn text-white text-start px-3">Support</button>
                    <button className="w-100 btn text-white text-start px-3">Setting</button>
                    <button className="w-100 btn text-white text-start px-3">API</button>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default DashboardSideBar