export async function LoginComponent (username, password, token){
    const res = await fetch('http://172.16.2.103:3001/auth',{
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `username=${username}&password=${password}`
    });
    const result = await res.json();
    return result;
}