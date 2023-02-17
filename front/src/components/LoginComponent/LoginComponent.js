import env from 'react-dotenv'

export async function LoginComponent (username, password, token){ 
    
    const res = await fetch(env.API_URL_AUTH, {
        method: 'post',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `username=${username}&password=${password}`
    });
    const temp = await res.json();
    temp.dataUser[0].senha = "********";
    env.SESSION = temp;
    return env.SESSION;
}