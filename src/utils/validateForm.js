
function isAddressValid(address) {
  const myRe = /^0x[a-fA-F0-9]{40}$/;
  if(myRe.test(address)) {
      return true;
  } else {
      return false;
  }
}

function hasSpace(address){
  const myRe = /\s/g;
  if(myRe.test(address)) {
    return true;
  } else {
    return false;
  }
}

function isAddressUnique(signerInfo, address) {
  for(let i=0; i < signerInfo.length; i++) {
    if (signerInfo[i].address === address) {
      return false;
    }
  }
  return true;
}

function validateForm(web3, address, state) {
  //remove any first and last space
  const signerAddress= address.trim();
  const prefix = signerAddress.slice(0,2);

  if(address.length === 0) {
    return {
      errorMsg:'',
      anyError: true
    };
  } else if( prefix !== "0x") {
    return {
      errorMsg:'address must start with 0x prefix.',
      anyError: true
    };
  } else if(hasSpace(signerAddress)) {
    return {
      errorMsg:'address should not contain any space character.',
      anyError:true
    };
  } else if(address.length !== 42) {
    return {
      errorMsg:'address length should be 42 including 0x prefix at the front.',
      anyError:true
    };
  } else if(!isAddressValid(signerAddress)) {
    return {
      errorMsg:'address should be in correct hex format.',
      anyError:true
    };
  } else if(state.length > 1) {
      if(!isAddressUnique(state, signerAddress)) {
        return {
          errorMsg:`duplicate address ${signerAddress} already exist.`,
          anyError:true
        };
      } else {
        return {
          errorMsg:false,
          anyError:false
        };
      }
  } else if(!web3.utils.checkAddressChecksum(address)) {
    return {
      errorMsg:'Invalid checksum',
      anyError: true
    };
  } else {
    return {
      errorMsg:false,
      anyError:false
    };
  }
}

export default validateForm;
