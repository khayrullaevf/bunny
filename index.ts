import figlet from "figlet";

const server=Bun.serve({
    port:3000,
    fetch(req:Request){
        const url=new URL(req.url)
        if (url.pathname=='/') {
            const body=figlet.textSync('Fazliddin Khayrullaev')

            return new Response(body)
        }

        if (url.pathname==='/about') {

            return new Response("About me")
        }

        if (url.pathname==='/contact') {

            return new Response("Contact me")
        }
        
        
      


        return new Response('404!')
    }
})


console.log(`Listening on PORT http://localhost:${server.port}`);
