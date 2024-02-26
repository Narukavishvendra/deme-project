import Header from "../components/header/header";
import './Dashboard.css';
import Button from 'react-bootstrap/Button';
import { IoVideocam } from "react-icons/io5";
import gitlImage from '../assets/img/right-background.jpeg';
import Footer from "../components/footer/footer";
export const Dasboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="d-flex flex-wrap landing-section">
                <div className="landing-left-section">
                    <div className="tagline-section p-6">
                        <div className="tagline-title">
                            Quick & Reliable <span>Warehousing and Logistics</span>  Solution.
                        </div>
                        <p className=" mt-4">
                            ShipUp delivers an unparalleled customer service to dedicated customer teams, engaged people working in an agile culture, and a global footprint
                        </p>
                        <div className="mt-5">
                            <Button variant="primary join-now-button">Join Now</Button>{' '}
                            <Button variant="light video-button ms-3"><IoVideocam /></Button>{' '}
                            <Button variant="play-demo-btn light  ms-3"><strong>Play Demo</strong></Button>{' '}
                        </div>
                    </div>
                </div>
                <div className="landing-right-section">
                    <img src={gitlImage} alt="girl-riding-bicycle" />
                </div>


            </div>
            <div className="form-section">
                <div className="form-group-section d-flex flex-wrap">
                    <div class="container-input">
                        <div class="material-textfield">
                            <input placeholder="placeholder" type="text" value="Enter Location" />
                            <label> Origin</label>
                        </div>
                    </div>
                    <div class="container-input">
                        <div class="material-textfield">
                            <input placeholder="placeholder" type="text" value="Enter Location" />
                            <label> Destination</label>
                        </div>
                    </div>
                    <div class="container-input">
                        <div class="material-textfield">
                            <input placeholder="placeholder" type="text" value='weight (Kg)' />
                            <label> Weight</label>
                        </div>
                    </div>
                    <div className="container-input">
                        <Button variant="primary check-price-button">Join Now</Button>{' '}

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}