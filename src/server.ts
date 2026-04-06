import express from "express";

class Server {
    private api = express()
    private router;
    private port: number

    constructor() {
        this.port = 8000
        this.router = express.Router()
    }

    public init() {
        this.api.use(express.json)
        this.api.use("/api/v1", this.router)
    }

    public getRouter() {
        return this.router
    }

    public run() {
        this.api.listen(this.port, function () {
            console.log("backend is running")
        })
    }
}

export default Server;