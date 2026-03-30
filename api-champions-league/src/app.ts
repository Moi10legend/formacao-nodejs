import express, {json} from "express"

import { router } from "./routes";

export function createApp(){
    const app = express()
    app.use(json()) //Dis que as requisições serão no formato JSON
    app.use("/api", router)

    return app;
}


