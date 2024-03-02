
import { fetch_valid_user } from '@/app/lib/data';
import { md5 } from 'js-md5';

export const SignInEmailPassword = async (email, password) => {

    if(!email || !password ) return null;

    const user = await fetch_valid_user(email);

    let EncrypPasswordEnter = md5(password);
    let EncrypPasswordDB = user[0].clave;
    
    if(EncrypPasswordEnter != EncrypPasswordDB){
        return null;
    }

    return user;

}
