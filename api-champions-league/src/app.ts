import express, {json} from "express"
import cors from "cors"

import { router } from "./routes";

export function createApp(){
    const app = express()
    app.use(json()) //Dis que as requisições serão no formato JSON
    app.use("/api", router)

    const corsOptions = {
        origin: "http://localhost3333"
    }

    app.use(cors())

    return app;
}


