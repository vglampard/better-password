import {sha256} from 'crypto-hash'

export async function hash(input){
return await sha256(input)
}

function alternatingCombine(arr1, arr2){
    let combined = []
for (let i=0;i<arr1.length;i++){
    combined.push(arr1[i]);
    combined.push(arr2[i]);
}
return combined.join('')
}

export function buildPassword(hashedInput, salt, pepper){
let strongBaseFirst = (hashedInput.slice(0, 10))+salt.slice(0,1).split('');
let strongBaseSecond= ("?!$7_?27" + pepper[0] + pepper[1]).split('');
let strongPassword = alternatingCombine(strongBaseFirst, strongBaseSecond);
return strongPassword;
}