function isEventFromPasswordManager(event){return event&&event.target&&event.target.value!==""&&((event.inputType===undefined&&event.data===undefined&&event.dataTransfer===undefined&&event.isComposing===undefined)||(!!event.data&&event.data.length>1&&event.isComposing===false&&event.inputType==="insertReplacementText"));
}function addListenerOnSelectAccountFromPasswordManager(passwordElementId,signInButtonId){const passwordElement=document.getElementById(passwordElementId);
const signInButton=document.getElementById(signInButtonId);
if(passwordElement&&signInButton){passwordElement.addEventListener("input",function(event){if(passwordElement.offsetParent!=null&&isEventFromPasswordManager(event)){signInButton.click();
}});
}}document.addEventListener("password-manager",function(pmEvent){const inputElement=document.getElementById(pmEvent.detail.inputElementId);
const signInButton=document.getElementById(pmEvent.detail.signInButtonId);
if(inputElement){inputElement.addEventListener("input",function(event){if(isEventFromPasswordManager(event)){if(pmEvent.detail.isUsernameInput){document.dispatchEvent(new CustomEvent("pwdManagerDetected.username",{detail:{proxy:1}}));
}else{document.dispatchEvent(new CustomEvent("pwdManagerDetected.password",{detail:{proxy:1}}));
}if(inputElement.offsetParent!=null&&signInButton){signInButton.click();
}}else{if(pmEvent.detail.isUsernameInput){document.dispatchEvent(new CustomEvent("pwdManagerDetected.username.clear",{detail:{proxy:1}}));
}else{document.dispatchEvent(new CustomEvent("pwdManagerDetected.password.clear",{detail:{proxy:1}}));
}}});
}});
function getPwdManagerCredentials(callback){return false;
}