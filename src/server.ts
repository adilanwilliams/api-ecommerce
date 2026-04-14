import type { Application, Router } from "express"
import express from "express"

class Server {
    private app: Application
    private routers: Router[] = []
    private port: number

    constructor() {
        this.app = express()
        this.port = 8000

        this.app.use(express.json())
    }

    public addRouter(_router: Router ) {     
        this.routers.push(_router)
    }

    public run() {
        this.routers.map(router => this.app.use(router))

        this.app.listen(this.port, function () {
            console.log("backend is running")
        })
    }
}

export default Server