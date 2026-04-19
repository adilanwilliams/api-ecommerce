import type { Application, Router } from "express"
import express from "express"

class Server {
    private app: Application
    private routers: Router[] = []
    private port: string | undefined

    constructor() {
        this.app = express()
        this.port = process.env.HOST_PORT

        this.app.use(express.json())
    }

    public addRouter(_router: Router ) {     
        this.routers.push(_router)
    }

    public run() {
        this.routers.map(router => this.app.use("/api/v1", router))
        const port = this.port
        
        this.app.listen(port, function () {
            console.log(`backend is running on port ${port}`)
        })
    }
}

export default Server