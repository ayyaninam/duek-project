import DashboardSideBar from "../components/DashboardSideBar"
import MainNavbar from "../components/MainNavbar"
import ProjectDetail from "../components/ProjectDetail"

type props = {
    Ellipsis: string,
    Link: any,
}

const Dashboard = (props: props) => {
    return (
        <div className="main__dashboard__div">
            <DashboardSideBar Link={props.Link} />

            <div className="main__left__portion__dashboard">
                <MainNavbar Link={props.Link} />
                <ProjectDetail Ellipsis={props.Ellipsis} />
            </div>
        </div >
    )
}

export default Dashboard