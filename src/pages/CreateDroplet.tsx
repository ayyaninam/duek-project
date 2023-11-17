import { useEffect, useState } from "react"
import DashboardSideBar from "../components/DashboardSideBar"
import MainNavbar from "../components/MainNavbar"

type props = {
    Link: any,
    AmericaFlag: string,
    UbuntuImage: string,
    cpu_data: any,
}


const CreateDroplet = (props: props) => {
    const [selectedCPU, setSelectedCPU] = useState("regular")
    const [authSelected, setAuthSelected] = useState("")
    const [dropletQty, setDropletQty] = useState(1)
    const [dropletHostName, setDropletHostName] = useState("")


    function makeid(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    function clicked__region(e: number) {
        var all_regions = document.querySelectorAll('.all_regions__list .region')
        for (let i = 0; i < all_regions.length; i++) {
            if (all_regions[i].classList.contains('active__region')) {
                all_regions[i].classList.remove('active__region')
            }
        }
        all_regions[e].classList.add('active__region')
    }
    function image__selctor(e: number) {
        var all_regions = document.querySelectorAll('.all__images .image__droplet')
        for (let i = 0; i < all_regions.length; i++) {
            if (all_regions[i].classList.contains('active__image')) {
                all_regions[i].classList.remove('active__image')
            }
        }
        all_regions[e].classList.add('active__image')
    }
    function cpu__selector(e: number) {
        var all_regions = document.querySelectorAll('.all__cpu__options .single__cpu')
        for (let i = 0; i < all_regions.length; i++) {
            if (all_regions[i].classList.contains('active__cpu')) {
                all_regions[i].classList.remove('active__cpu')
            }
        }
        all_regions[e].classList.add('active__cpu')
        if (e === 0) { setSelectedCPU('regular') }
        if (e === 1) { setSelectedCPU('premium_intel') }
        if (e === 2) { setSelectedCPU('premium_amd') }
        var all_specs = document.querySelectorAll('.all__cpu__available__and__specs .single__cpu__specs')
        for (let i = 0; i < all_specs.length; i++) {
            if (all_specs[i].classList.contains('active__spec')) {
                all_specs[i].classList.remove('active__spec')
            }
        }
    }
    function cpu__specs__selector(e: number) {
        var all_regions = document.querySelectorAll('.all__cpu__available__and__specs .single__cpu__specs')
        for (let i = 0; i < all_regions.length; i++) {
            if (all_regions[i].classList.contains('active__spec')) {
                all_regions[i].classList.remove('active__spec')
            }
        }
        all_regions[e].classList.add('active__spec')

    }
    function selected_auth(e: number) {
        var all_regions = document.querySelectorAll('.all__auths .auth')
        for (let i = 0; i < all_regions.length; i++) {
            if (all_regions[i].classList.contains('active__auth')) {
                all_regions[i].classList.remove('active__auth')
            }
        }
        all_regions[e].classList.add('active__auth')
        if (e === 1) { setAuthSelected('password') }
        if (e === 0) { setAuthSelected('ssh') }
    }
    function selected__recommend(e: any) {
        var all_regions = document.querySelectorAll('.our__recommandation .recomended__item')
        if (all_regions[e].classList.contains('recomended__active')) {
            all_regions[e].classList.remove('recomended__active')
        } else {

            all_regions[e].classList.add('recomended__active')
        }

    }
    function copy__to__clipboard(e: any) {
        navigator.clipboard.writeText(e)

    }
    useEffect(() => {
        if (dropletQty < 1) {
            setDropletQty(1)
        }
    }, [dropletQty])
    useEffect(() => {
        setDropletHostName(makeid(30))
    }, [])

    return (
        <div className="main__dashboard__div">
            <DashboardSideBar Link={props.Link} />

            <div className="main__left__portion__dashboard">
                <MainNavbar Link={props.Link} />
                <div className="create__droplet__section__main m-5">
                    <h2 className="text-muted">Create Droplets</h2>
                    <p className="text-muted">Droplets are virtual machines that anyone can setup in seconds. You can use droplets, either standalone or as part of a larger, cloud based infrastructure.</p>
                    <div className="droplet__choose__region">
                        <h5 className="mt-5">Choose Region</h5>
                        <div className="all_regions__list mt-5">
                            <div onClick={() => clicked__region(0)} className="region w-25">
                                <img src={props.AmericaFlag} alt="" />
                                <span className="mx-3">New York</span>
                            </div>
                            <div onClick={() => clicked__region(1)} className="region w-25">
                                <img src={props.AmericaFlag} alt="" />
                                <span className="mx-3">San Francisco</span>
                            </div>
                            <div onClick={() => clicked__region(2)} className="region w-25">
                                <img src={props.AmericaFlag} alt="" />
                                <span className="mx-3">New York</span>
                            </div>
                            <div onClick={() => clicked__region(3)} className="region w-25">
                                <img src={props.AmericaFlag} alt="" />
                                <span className="mx-3">San Francisco</span>
                            </div>
                            <div onClick={() => clicked__region(4)} className="region w-25">
                                <img src={props.AmericaFlag} alt="" />
                                <span className="mx-3">New York</span>
                            </div>

                        </div>
                    </div>
                    <div className="data__Center__droplet mt-5">
                        <h5>Datacenter</h5>
                        <div className="datacenter__selector d-flex flex-column justify-content-center w-50">
                            {/* <label htmlFor="cars">Choose the Data Center:</label> */}
                            <select name="datacenter" className="p-3 mt-3 rounded">
                                <option value="SF01">San Francisco &#183; DataCenter 1 &#183; SF01</option>
                                <option value="SF02">San Francisco &#183; DataCenter 2 &#183; SF02</option>
                                <option value="SF03">San Francisco &#183; DataCenter 3 &#183; SF03</option>

                            </select>
                        </div>
                        <div className="choose__image__droplet">
                            <h5 className="mt-5">Choose an Image</h5>
                            <div className="all__images">
                                <div className="image__droplet" onClick={() => image__selctor(0)}>
                                    <img className="droplet__image__image" src={props.UbuntuImage} alt="" />
                                    <h6>Ubuntu</h6>
                                </div>
                                <div className="image__droplet" onClick={() => image__selctor(1)}>
                                    <img className="droplet__image__image" src={props.UbuntuImage} alt="" />
                                    <h6>Ubuntu</h6>
                                </div>
                                <div className="image__droplet" onClick={() => image__selctor(2)}>
                                    <img className="droplet__image__image" src={props.UbuntuImage} alt="" />
                                    <h6>Ubuntu</h6>
                                </div>
                                <div className="image__droplet" onClick={() => image__selctor(3)}>
                                    <img className="droplet__image__image" src={props.UbuntuImage} alt="" />
                                    <h6>Ubuntu</h6>
                                </div>
                                <div className="image__droplet" onClick={() => image__selctor(4)}>
                                    <img className="droplet__image__image" src={props.UbuntuImage} alt="" />
                                    <h6>Ubuntu</h6>
                                </div>
                            </div>
                            <div className="image__version__slector d-flex flex-column">
                                <span className="mt-5">Version:</span>
                                <select name="version__image" className="p-3 mt-3 rounded w-25">
                                    <option value="volvo">23.10 x64</option>
                                    <option value="volvo">20.10 x64</option>
                                    <option value="volvo">16.10 x64</option>
                                </select>
                            </div>
                        </div>
                        <div className="choose__size__of__image mt-5">
                            <span className="mt-5">CPU Options:</span>
                            <div className="all__cpu__options d-flex">
                                <div className="single__cpu" onClick={() => cpu__selector(0)}>
                                    <h6>Regular</h6>
                                    <span>Disk Type: SSD</span>
                                </div>
                                <div className="single__cpu" onClick={() => cpu__selector(1)}>
                                    <h6>Premium Intel</h6>
                                    <span>NVMe SSD</span>
                                </div>
                                <div className="single__cpu" onClick={() => cpu__selector(2)}>
                                    <h6>Premium AMD</h6>
                                    <span>NVMe SSD</span>
                                </div>
                            </div>
                            <hr />
                            <div className="all__cpu__available__and__specs">
                                {props.cpu_data.filter((d: any) => d.type === selectedCPU).map((e: any, index: number) => {
                                    return (
                                        <div className="single__cpu__specs" onClick={() => cpu__specs__selector(index)}>
                                            <h6>${e.monthly_price}/mo</h6>
                                            <small>${e.hourly_price}/hour</small>
                                            <hr />
                                            <small>{e.cpu_gb} GB / {e.cpu_quantity} CPU</small><br />
                                            <small>{e.ssd_storage} GB SSD Disk</small><br />
                                            <small>{e.transfer_rate} {e.transfer_rate_in} Transfer</small><br />
                                        </div>
                                    )

                                })}

                            </div>
                        </div>
                        <div className="authentication__method__section mt-5">
                            <h5>Choose Authentication Method</h5>
                            <div className="all__auths">
                                <div className="auth" onClick={() => selected_auth(0)}>
                                    <h6>SSH KEY</h6>
                                    <span>Connect to your Droplet with an SSH key pair</span>
                                </div>
                                <div className="auth" onClick={() => selected_auth(1)}>
                                    <h6>PASSWORD</h6>
                                    <span>Connect to your Droplet as the “root” user via password</span>
                                </div>
                            </div>
                        </div>
                        <div className="password__ssh__selection mt-5 ">
                            {authSelected === "password" &&
                                <div className="password__selection__section">
                                    <h5>Input Password for Root User</h5>
                                    <div className="d-flex flex-column mt-5">
                                        <small>Password</small>
                                        <input type="password" className="p-3 mt-3 rounded w-50" />
                                    </div>
                                </div>
                            }
                            {authSelected === "ssh" &&
                                <div className="ssh__selection__section">
                                    <h5>Add a public SSH key</h5>
                                    <span className="text-muted">SSH keys are a more secure method of logging into an SSH server, because they are not vulnerable to common brute-force password hacking attacks.</span>
                                    <div className="d-flex w-100">
                                        <div className="w-50 d-flex flex-column mt-5">
                                            <small>SSH KEY CONTENT</small>
                                            <textarea className="w-75 p-3 mt-3 rounded w-50" ></textarea>
                                            <small className="mt-3">Name</small>
                                            <input type="text" className="w-75 p-3 mt-3 rounded w-50" />
                                        </div>
                                        <div className="w-50 help__For__ssh mt-5">
                                            <h5>SSH Keys</h5>
                                            <small>Follow these instructions to create or add SSH keys on Linux, MacOS & Windows.</small>
                                            <h5 className="my-3">Create a new key pair, if needed</h5>
                                            <small>Open a terminal and run the following command:</small>
                                            <button className="mt-3 btn btn-outline-secondary w-100" onClick={(e: any) => { copy__to__clipboard(e.target.innerHTML) }}>ssh-keygen</button>
                                            <small>You will be prompted to save and name the key.</small>
                                            <br />
                                            <h6 className="bg-secondary p-5 text-white rounded mt-4">Generating public/private rsa key pair. Enter file in which to save the key (/Users/USER/.ssh/id_rsa): </h6>
                                            <small>Next you will be asked to create and confirm a passphrase for the key (highly recommended):</small>
                                            <h6 className="bg-secondary p-5 text-white rounded mt-4">Enter passphrase (empty for no passphrase):Enter same passphrase again:</h6>
                                            <small>This will generate two files, by default called id_rsa and id_rsa.pub. Next, add this public key.</small>
                                            <h6 className="mt-5">Add the public key</h6>
                                            <small>Copy and paste the contents of the .pub file, typically id_rsa.pub, into the SSH key content field on the left.</small>
                                            <button className="mt-3 btn btn-outline-secondary w-100" onClick={(e: any) => { copy__to__clipboard(e.target.innerHTML) }}>cat ~/.ssh/id_rsa.pub</button>

                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="our__recommandation w-100 mt-5">
                            <h5>We recommend these options</h5>
                            <div className="recomended__item my-5" onClick={() => selected__recommend(0)}>
                                <h6>Add improved metrics monitoring and alerting (free)</h6>
                                <span>Collect and graph expanded system-level metrics, track performance, and set up alerts instantly within the control panel.</span>
                            </div>
                            <div className="recomended__item my-5" onClick={() => selected__recommend(1)}>
                                <h6>Add improved metrics monitoring and alerting (free)</h6>
                                <span>Collect and graph expanded system-level metrics, track performance, and set up alerts instantly within the control panel.</span>
                            </div>
                            <div className="recomended__item my-5" onClick={() => selected__recommend(2)}>
                                <h6>Add improved metrics monitoring and alerting (free)</h6>
                                <span>Collect and graph expanded system-level metrics, track performance, and set up alerts instantly within the control panel.</span>
                            </div>
                        </div>
                        <div className="finalizing__setup mt-5">
                            <h6>Finalize Details</h6>
                            <div className="all__main__under__finalize mt-5">
                                <div className="quantity__main__Droplet w-75">
                                    <h6>Quantity</h6>
                                    <small>You can only create 1 Droplet with this configuration at a time.</small>
                                    <div className="quantity__of__droplet mt-5">
                                        <span onClick={() => setDropletQty(dropletQty - 1)} className="cursor-pointer">-</span>
                                        <span><input type="text" id="droplet__quantity" name="droplet__quantity" className="text-center" value={dropletQty} /></span>
                                        <span onClick={() => setDropletQty(dropletQty + 1)} className="cursor-pointer">+</span>
                                    </div>
                                </div>
                                <div className="hostname__droplet w-75">
                                    <h6>HostName</h6>
                                    <small>Give your Droplets an identifying name you will remember them by.</small><br />
                                    <input type="text" value={dropletHostName} className="p-3 w-75 mt-4" />
                                </div>
                            </div>

                        </div>
                        <button className="btn btn-success my-5 d-flex justify-content-end " >CREATE DROPLET</button>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default CreateDroplet