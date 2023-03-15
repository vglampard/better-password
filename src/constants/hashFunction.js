import {sha256} from 'crypto-hash'

export async function hash(input){
return await sha256(input)
}