import DashboardSideBar from "../components/DashboardSideBar"
import MainNavbar from "../components/MainNavbar"

type props = {
    Link: any,
}
const Billing = (props: props) => {
    return (
        <div className="main__dashboard__div">
            <DashboardSideBar Link={props.Link} />

            <div className="main__left__portion__dashboard">
                <MainNavbar Link={props.Link} />
                <div className="main__upper__billing m-5">

                    <div className="billing__main">
                        <small>Note: Information on this page is updated daily. Last updated November 16, 2023 at 4:06 am UTC</small>
                        <h1 className="mt-5">Billing</h1>
                        <hr />
                        <div className="billing__highligts border p-5 rounded">
                            <h5>Estimated Due</h5>
                            <small className="my-3">This is an estimate of the amount you owe based on your current month-to-date usage after credits & prepayments.</small>
                            <h1 className="my-5">$0.00</h1>
                            <div className="all__highlights d-flex justify-content-between mt-5">
                                <span>
                                    <h6>December 1, 2023</h6>
                                    <p>Payment due</p>
                                </span>
                                <span>
                                    <h6>December 1, 2023</h6>
                                    <p>Payment due</p>
                                </span>
                                <span>
                                    <h6>December 1, 2023</h6>
                                    <p>Payment due</p>
                                </span>
                                <span>
                                    <h6>December 1, 2023</h6>
                                    <p>Payment due</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="summary__billing border p-5 mt-5 rounded">
                        <div className="heading__of__summary__billing d-flex justify-content-around ">
                            <div>
                                <h5>Month-to-date Summary November 1 - 16, 2023</h5>
                                <small>These charges are factored into your account balance.</small>
                            </div>
                            <div className="d-flex flex-column ">
                                <span>
                                    Download: <a href="">PDF</a> - <a href="">CSV</a>
                                </span>
                                {/* <span>
                                <a href="">Collapse all</a>
                            </span> */}
                            </div>
                        </div>
                        <div className="table__of__summary__billing mt-5">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Droplet</th>
                                        <th scope="col">Hours</th>
                                        <th scope="col">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">marshall-1698786725800 (syd1) 3.18GB Droplet Snapshot</th>
                                        <td>360 hours</td>
                                        <td>$0.10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">marshall-1698786725800 (syd1) 3.18GB Droplet Snapshot</th>
                                        <td>360 hours</td>
                                        <td>$0.10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">marshall-1698786725800 (syd1) 3.18GB Droplet Snapshot</th>
                                        <td>360 hours</td>
                                        <td>$0.10</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>


                    </div>
                    <div className="transfered__Data__section border p-5 mt-5 rounded">
                        <h3>Droplet transfer</h3>
                        <div className="d-flex justify-content-between">
                            <small>Estimated Droplet Transfer Pool</small>
                            <small>6 GB used of 2279 GB </small>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                        </div>
                        <small>Last month you transferred 0.31 GB of data from your Droplets</small>
                    </div>
                    <div className="border p-5 mt-5 rounded">
                        <h3>Support plan</h3>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                                <span className="mx-5 d-flex flex-column mt-5">
                                    <small><b>CURRENT</b></small>
                                    <small>Starter</small>
                                </span>
                                <span className="mx-5 d-flex flex-column mt-5">
                                    <small><b>PLAN COST</b></small>
                                    <small>$0/month</small>
                                </span>
                            </div>
                            <div>
                                <button className="btn btn-dark mt-5">EDIT PLAN</button>
                            </div>
                        </div>
                        <div className="d-flex flex-column mt-5">
                            <small>Have questions around support plan billing?</small>
                            <a href="">Check out our support pricing FAQ</a>
                        </div>
                    </div>
                    <div className="border p-5 mt-5 rounded">
                        <h3>Billing Alert</h3>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="w-75">
                                <small className="my-4">Set up automated billing alerts to receive emails when a specified usage amount is reached for spend across your entire team.</small><br />
                                <h6 className="mt-5">USAGE AMOUNT</h6>
                                <h6>$20 USD</h6>
                            </div>
                            <div className="">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ACTION
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item text-danger cursor-pointer" >Remove Action</a>
                                        <a className="dropdown-item cursor-pointer" >Update</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border p-5 mt-5 rounded">
                        <h4>Available Credit: $190.53</h4>
                        <small>Applicable credits will be applied on your next months invoice. Learn More</small>
                        <div>
                            <table className="table mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">Description</th>
                                        <th scope="col">Expiration</th>
                                        <th scope="col">Initial</th>
                                        <th scope="col">Available</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Promotional Credit from ReferreeNew2209 60 day expiration</th>
                                        <td>December 21, 2023</td>
                                        <td>$200.00</td>
                                        <td>$190.53</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <small>Account credits do not apply to Add-Ons.</small>
                    </div>
                    <div className="border p-5 mt-5 rounded">
                        <h4>Billing Settings</h4>
                        <h6 className="mt-4">ADDRESS</h6>
                        <small>This address appears on your monthly invoice and should be the legal address of your home or business</small>
                        <h6 className="my-4 d-flex flex-column">
                            <span>Parcel Locker 10085 12635</span>
                            <span>Melbourne, VIC - 3000</span>
                            <span>AU</span>
                        </h6>
                        <div className="d-flex flex-column">
                            <h6 className="mt-5">TAX LOCATION</h6>
                            <small>Australia - 10.00% GST</small>
                            <a className="link cursor-pointer mb-4">More info</a>
                            <small>Your tax location determines the taxes that are applied to your bill</small>
                            <a className="link cursor-pointer ">How do I correct my tax location?</a>
                            <h6 className="mt-5">TAX ID</h6>
                            <small>Registered business can enter their tax identification number to remove tax charges from future bills.</small>
                        </div>



                    </div>
                    <div className="mt-5">
                        <h4>Billing history</h4>
                        <div className="border p-5 mt-5 rounded">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">November 01, 2023</th>
                                        <td><a className="link cursor-pointer">Invoice for October 2023</a></td>
                                        <td>$0.00</td>
                                        <td>Download: <a href="">PDF</a> - <a href="">CSV</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">November 01, 2023</th>
                                        <td><a className="link cursor-pointer">Invoice for October 2023</a></td>
                                        <td>$0.00</td>
                                        <td>Download: <a href="">PDF</a> - <a href="">CSV</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">November 01, 2023</th>
                                        <td><a className="link cursor-pointer">Invoice for October 2023</a></td>
                                        <td>$0.00</td>
                                        <td>Download: <a href="">PDF</a> - <a href="">CSV</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">November 01, 2023</th>
                                        <td><a className="link cursor-pointer">Invoice for October 2023</a></td>
                                        <td>$0.00</td>
                                        <td>Download: <a href="">PDF</a> - <a href="">CSV</a></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Billing