import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { MainProvider } from './context/MainProvider';
import { SignInfoProvider } from './context/SignInfoProvider';
import './Main.css'

// COMPONENTS
import DeployDoc from './deployDoc/DeployDoc';
import signDoc from './signDoc/SignDoc';
import DocInfo from './docInfo/DocInfo';
import Status from './deployDoc/Status';

function Home() {
    return (
        <div>
            <br />
            <p>Main Concept:</p>
            <p>Deploy Hash of the document/file and let anyone or authroized users to sign the hash of the document thus completing document signature process.</p>

            <br />
            <p>Do you want to  </p>
            <ul >
                <li><Link to="/deploy">Create And Deploy Document?</Link></li>
                <li><Link to="/sign">Sign Document?</Link></li>
                <li><Link to="/info">Get Document Info?</Link></li>
            </ul>
        </div>
    );
}

const HomeApp = () => {
    return (
        <Router>
            <MainProvider>
                <SignInfoProvider>
            <div>
                <header>
                    <h4 className="LogoMargin">SignTheDoc</h4>
                    <ul className="NavMenu" >
                        <li><NavLink className="MainLinks" to="/" exact activeClassName="ActiveLink" >Home |</NavLink></li>
                        <li><NavLink className="MainLinks" to="/deploy" activeClassName="ActiveLink">Deploy Document |</NavLink></li>
                        <li><NavLink className="MainLinks" to="/sign" activeClassName="ActiveLink">Sign Document |</NavLink> </li>
                        <li><NavLink className="MainLinks" to="/info" activeClassName="ActiveLink">Get Document Info |</NavLink> </li>
                    </ul>
                </header>
                <Route path="/" exact component={Home} />
                <Route path="/deploy" component={DeployDoc} />
                <Route path="/sign" component={signDoc} />
                <Route path="/info" component={DocInfo} />
                <Route path="/status" component={Status} />
                <br />
            </div>
                </SignInfoProvider>
            </MainProvider>
        </Router>
    );
}

export default HomeApp;
