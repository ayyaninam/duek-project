import { useState } from 'react'
import DashboardSideBar from '../components/DashboardSideBar'
import MainNavbar from '../components/MainNavbar'

type props = {
    Link: any,
}

const Networking = (props: props) => {
    const [activeSection, setActiveSection] = useState("domain")
    return (
        <div className="main__dashboard__div">
            <DashboardSideBar Link={props.Link} />

            <div className="main__left__portion__dashboard">
                <MainNavbar Link={props.Link} />
                <div className="networking__main__div m-5">
                    <h1>Networking</h1>
                    <div className="all__networking__menu">
                        <div className=" mt-5 menu__shift__of__project__Dashboard  d-flex justify-content-between">
                            <span onClick={() => setActiveSection('domain')} className="text-dark menu__shifter__link cursor-pointer" >Domains</span>
                            <span onClick={() => setActiveSection('reserved_ip')} className="text-dark menu__shifter__link cursor-pointer">Reserved IPS</span>
                            <span onClick={() => setActiveSection('load_balancer')} className="text-dark menu__shifter__link cursor-pointer">Load Balancers</span>
                            <span onClick={() => setActiveSection('vps__network')} className="text-dark menu__shifter__link cursor-pointer">VPC</span>
                            <span onClick={() => setActiveSection('firewalls')} className="text-dark menu__shifter__link cursor-pointer">Firewalls</span>
                            <span onClick={() => setActiveSection('pt_record')} className="text-dark menu__shifter__link cursor-pointer">PTR records</span>
                        </div>
                    </div>
                    <div className="upper__networka mt-5">


                        {activeSection === "domain" && (
                            <div>
                                <h3>Add a domain</h3>
                                <small>Enter a domain that you own below and start managing your DNS within your DigitalOcean account.</small>
                                <div className="input__domain__net d-flex justify-content-around mt-5">
                                    <input type="text" name='domain' className='p-3 mt-3 rounded w-25' placeholder='Enter Domain' />
                                    <select name="project" placeholder='Project #1' className="p-3 mt-3 rounded w-25">
                                        <option value="proj1">Project #1</option>
                                        <option value="proj2">Project #2</option>
                                        <option value="proj3">Project #3</option>
                                    </select>
                                    <button className='btn btn-success'>ADD DOMAIN</button>
                                </div>
                                <div className="all_domain__already mt-5">
                                    <h4>Domains</h4>
                                    <div>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Domain</th>
                                                    <th scope="col">Directs to</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <span>abcdefg.com</span><br />
                                                        <small>3 A / 3 NS</small>
                                                    </th>
                                                    <td>multiple locations</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span>abcdefg.com</span><br />
                                                        <small>3 A / 3 NS</small>
                                                    </th>
                                                    <td>multiple locations</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span>abcdefg.com</span><br />
                                                        <small>3 A / 3 NS</small>
                                                    </th>
                                                    <td>multiple locations</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        )}

                        {activeSection === "reserved_ip" && (
                            <div className='p-5 border rounded '>
                                <h4>Looks like you have no Reserved IPs.</h4>
                                <small>A Reserved IP is a static IP address that points to one of your Droplets. It allows you to redirect network traffic to any of your Droplets in the same datacenter. Learn more</small>

                                <div className="input__domain__net d-flex justify-content-around mt-5">
                                    <select name="project" placeholder='Project #1' className="p-3 mt-3 rounded w-25">
                                        <option value="proj1">Project #1</option>
                                        <option value="proj2">Project #2</option>
                                        <option value="proj3">Project #3</option>
                                    </select>
                                    <button className='btn btn-success'>Assign Reserved IPs</button>
                                </div>
                            </div>
                        )}

                        {activeSection === "load_balancer" && (
                            <div className='p-5 border rounded '>
                                <h4>Looks like you have no Load Balancers</h4>
                                <small>Load Balancers let you distribute traffic between multiple Droplets and are a good way to horizontally scale your app. They're fully managed by DigitalOcean—no set up or configuration required.</small>

                                <div className="input__domain__net d-flex justify-content-around mt-5">
                                    <select name="project" placeholder='Project #1' className="p-3 mt-3 rounded w-25">
                                        <option value="proj1">Project #1</option>
                                        <option value="proj2">Project #2</option>
                                        <option value="proj3">Project #3</option>
                                    </select>
                                    <button className='btn btn-success'>Create a Load Balancer</button>
                                </div>
                            </div>
                        )}
                        {activeSection === "vps__network" && (
                            <div className='p-5 border rounded '>
                                <h4>VPC Networks</h4>
                                <small>Resources assigned to the same VPC network can communicate securely with each other via private IP. Communication with resources outside the VPC must use a public network IP.</small><br />

                                {/* <div className="input__domain__net d-flex justify-content-around mt-5">
                                    <select name="project" placeholder='Project #1' className="p-3 mt-3 rounded w-25">
                                        <option value="proj1">Project #1</option>
                                        <option value="proj2">Project #2</option>
                                        <option value="proj3">Project #3</option>
                                    </select> */}
                                <button className='btn btn-success mt-5'>Create VPS Network</button>
                                {/* </div> */}
                            </div>
                        )}
                        {activeSection === "firewalls" && (
                            <div className='p-5 border rounded '>
                                <h4>Firewalls</h4>
                                <small>Firewalls allow you to easily secure your infrastructure by explicitly defining which type of traffic is allowed to reach it. Use tags to organize your infrastructure and apply Firewall rules to multiple resources.</small><br />

                                {/* <div className="input__domain__net d-flex justify-content-around mt-5">
                                    <select name="project" placeholder='Project #1' className="p-3 mt-3 rounded w-25">
                                        <option value="proj1">Project #1</option>
                                        <option value="proj2">Project #2</option>
                                        <option value="proj3">Project #3</option>
                                    </select> */}
                                <button className='btn btn-success mt-5'>Create FIREWALLS</button>
                                {/* </div> */}
                            </div>
                        )}
                        {activeSection === "pt_record" && (
                            <div className='p-5 border rounded '>
                                <h4>PTR records</h4>
                                <small>You have no PTR records.</small><br />

                                {/* <div className="input__domain__net d-flex justify-content-around mt-5">
                                    <select name="project" placeholder='Project #1' className="p-3 mt-3 rounded w-25">
                                        <option value="proj1">Project #1</option>
                                        <option value="proj2">Project #2</option>
                                        <option value="proj3">Project #3</option>
                                    </select> */}
                                {/* <button className='btn btn-success mt-5'>Create FIREWALLS</button> */}
                                {/* </div> */}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Networking