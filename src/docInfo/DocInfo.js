import React from 'react';
import InputAndGetInfo from '../shared/InputAndGetInfo';
import { RenderDocInfo } from '../shared/DisplayInfo';
import { SignInfoContext } from '../context/SignInfoContext';
import { checkWeb3 } from '../utils/initWeb3';

class DocInfo extends React.Component {
    componentDidMount = async () => {
        const { uploadHash, inputHash } = this.context;

        if(uploadHash || inputHash ) {
            this.context.resetState();
        }

        await checkWeb3(this.context);

        const { web3 } = this.context.loadWeb3;

        if(!web3) {
            return console.log('MetaMask not detected');
        }
    }

    render() {
        const { docData } = this.context;
        let displayInfo;
        
        if (docData.docHash && docData.signature) {
            displayInfo = (
                <div>
                    <h4>Deployed Document/File Info:</h4>
                    {RenderDocInfo(docData)}
                </div>
            );
        } else {
            displayInfo = null;
        }

        return (
            <div>
                <InputAndGetInfo />
                {displayInfo}
            </div>
        );
    }
}

DocInfo.contextType = SignInfoContext;
export default DocInfo;

