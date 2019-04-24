import React from 'react';

export const failWeb3Msg = "Web3 account not detected, Please install/Login to       MetaMask and try again.";

export function hasKey(obj, key) {
  if (obj.hasOwnProperty(key))
    return true;
  return false;
}

export function accessMsg(step) {
  return (
    <div>
      <p> Complete Step:{step} to access this content.</p>
    </div>
  );
}

export function proceedMsg(step) {
  return (
    <div>
      <p><i>Click Next to proceed to {step} below.</i></p>
    </div>
  );
}

export function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop))
      return false;
  }
  return true;
}

export function makeSignerList(signerInfo) {
  let signerList = [];
  for (let i = 0; i < signerInfo.length; i++) {
    if (!signerInfo[i].error && signerInfo[i].address.length > 0) {
      signerList.push(signerInfo[i].address);
    };
  }
  return signerList;
}


