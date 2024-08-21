export async function POST(request:Request){
    const baseURL = process.env.BASE_URL;
    const {username, password} =await request.json();
    if(!username && !password){
        return new Response('Username and password missing',{
            status:400,
        })
    }
    try {
        const response = await fetch(`${baseURL}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({username,password}),
        });
        const data = await response.json()
        return new Response(JSON.stringify(data), {
            status: 201
        });
 
    }catch(error){
        return new Response((error as Error).message, {
            status: 500
        })
    }
}




