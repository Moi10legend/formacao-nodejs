import fastify from "fastify"
import cors from "@fastify/cors"

const server = fastify({logger: true});

server.register(cors, {
    origin: "*" //Permite que qualquer pessoa comsuma minha API
})

const teams = [
    {id: 1, name: "Ferrari"},
    {id: 2,name: "Mercedes"},
    {id: 3, name: "McLaren"}]

const drivers = [
    {id: 1, name: "Charles Leclerc", team: "Ferrari"},
    {id: 2,name: "Lewis Hamilton", team: "Ferrari"},
    {id: 3, name: "George Russel", team: "Mercedes"}]

server.get("/teams", async(request, response) => {
    response.type("application/json").code(200);

    return teams
})

server.get("/drivers", async(request, response) => {
    return drivers
})

interface DriverParams{
    id: string,
}

server.get<{Params:DriverParams}>("/drivers/:id", async(request, response) => {
    const id = parseInt(request.params.id)

    const driver = drivers.find(d => d.id === id)

    if(!driver){
        response.type("application/json").code(404);
        return {message: "Driver Not Found"}
    }

    response.type("application/json").code(200);
    return driver
})

server.listen({ port: 3333 }, () =>{
    console.log("Server init")
})