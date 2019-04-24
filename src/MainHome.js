import React from 'react';
import { Link } from 'react-router-dom';


class MainHome extends React.Component {
    state = {
        address:'',
        network:''
    }

    componentDidMount = async () => {
        const self = this;
        window.web3.currentProvider.publicConfigStore.on('update', function check() {
            const address = window.ethereum.selectedAddress;
            const network = window.ethereum.networkVersion;
            self.setState({
                address: address,
                network: network
            });
            console.log(self.state)
        });
    }

    render() {
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
}



export default MainHome
// pass the context around
// MainContext, SignInfoContext.

