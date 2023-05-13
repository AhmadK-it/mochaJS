import { v4 as uuidv4 } from 'uuid';
import cryptoRandomString from 'crypto-random-string';

export const createPairs = ()=>{
    const pairs = [];

    for (let i = 0; i < 10000; i++) {
        const uuidValue = uuidv4();
        const token = cryptoRandomString({ length: 10 });

        pairs.push({ uuid: uuidValue, token: token });
}
return pairs
}

