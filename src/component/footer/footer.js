import React from "react"
import newyorktimeImg from "../../image/TheNewYorkTime.PNG"
import "./footer.css"


export default function Footer() {
    return(
        <div className="footer-container">
            <img src={newyorktimeImg} className="logo-footer"></img>
            <div className="footerMenù-container">
                <div className="list-container">
                    <ul className="ul-footer">
                        <li className="title-items">NEWS</li>
                        <li className="menù-items">Home Page</li>
                        <li className="menù-items">World</li>
                        <li className="menù-items">Coronavirus</li>
                        <li className="menù-items">U.S.</li>
                        <li className="menù-items">Politics</li>
                        <li className="menù-items">New York</li>
                        <li className="menù-items">Business</li>
                        <li className="menù-items">Tech</li>
                        <li className="menù-items">Science</li>
                        <li className="menù-items">Sports</li>
                        <li className="menù-items">Wildfire Tracker</li>
                        <li className="menù-items">Obituaries</li>
                        <li className="menù-items">Today's paper</li>
                        <li className="menù-items">Trending</li>
                    </ul>
                </div>
                <div className="list-container">
                    <ul className="ul-footer">
                        <li className="title-items">OPINION</li>
                        <li className="menù-items">Today's opinion</li>
                        <li className="menù-items">Columnists</li>
                        <li className="menù-items">Editorials</li>
                        <li className="menù-items">Guest Essays</li>
                        <li className="menù-items">Letters</li>
                        <li className="menù-items">Sunday Opinion</li>
                        <li className="menù-items">Opinion Video</li>
                    </ul>
                </div>
                <div className="list-container">
                    <ul className="ul-footer">
                        <li className="title-items">ARTS</li>
                        <li className="menù-items">Today's Arts</li>
                        <li className="menù-items">Art & Design</li>
                        <li className="menù-items">Books</li>
                        <li className="menù-items">Best Sellers Books</li>
                        <li className="menù-items">Dance</li>
                        <li className="menù-items">Movies</li>
                        <li className="menù-items">Music</li>
                        <li className="menù-items">Pop Culture</li>
                        <li className="menù-items">Television</li>
                        <li className="menù-items">Theather</li>
                        <li className="menù-items">Video: Arts</li>
                    </ul>
                </div>
                <div className="list-container">
                    <ul className="ul-footer">
                        <li className="title-items">LIVING</li>
                        <li className="menù-items">Automotive</li>
                        <li className="menù-items">Games</li>
                        <li className="menù-items">Education</li>
                        <li className="menù-items">Food</li>
                        <li className="menù-items">Health</li>
                        <li className="menù-items">Jobs</li>
                        <li className="menù-items">Love</li>
                        <li className="menù-items">Magazine</li>
                        <li className="menù-items">Parenting</li>
                        <li className="menù-items">Real Estate</li>
                        <li className="menù-items">Style</li>
                        <li className="menù-items">Travel</li>
                    </ul>
                </div>
                <div className="list-container">
                    <ul className="ul-footer">
                        <li className="title-items">MORE</li>
                        <li className="menù-items">Reader Center</li>
                        <li className="menù-items">The Athletic</li>
                        <li className="menù-items">Wirecutter</li>
                        <li className="menù-items">Cooking</li>
                        <li className="menù-items">Headway</li>
                        <li className="menù-items">Live Events</li>
                        <li className="menù-items">The Learning Network</li>
                        <li className="menù-items">Tools & Services</li>
                        <li className="menù-items">Podcasts</li>
                        <li className="menù-items">Video</li>
                        <li className="menù-items">Graphics</li>
                        <li className="menù-items">TimesMachine</li>
                        <li className="menù-items">Times Store</li>
                        <li className="menù-items">Manage My Account</li>
                    </ul>
                </div>
                <div className="secondMenù-container">
                    <ul className="ul-footer2">
                        <li className="title-items">SUBSCRIBE</li>
                        <li className="menù-items">Home Delivery</li>
                        <li className="menù-items">Digital Subscription</li>
                        <li className="menù-items">Games</li>
                        <li className="menù-items">Cooking</li>
                        <li className="menù-items">Email Newsletter</li>
                        <li className="menù-items">Corporate Subscription</li>
                        <li className="menù-items">Education Rate</li>
                    </ul>
                    <ul className="ul-footer3">
                        <li className="menù-items">Mobile Application</li>
                        <li className="menù-items">Replica Edition</li>
                        <li className="menù-items">International</li>
                        <li className="menù-items">Canada</li>
                        <li className="menù-items">Espanol</li>
                        <li className="menù-items">Cinese</li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
