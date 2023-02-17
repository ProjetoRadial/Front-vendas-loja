
import env from "react-dotenv";

export async function ConsultaVendasComponent () {
       
    const res = await fetch(env.API_URL_DASHBOARD, { 
        method: 'get',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
    
   

    
 

 
    return;
};