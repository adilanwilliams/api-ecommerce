import { Router } from "express"
import UserController from "../controllers/userController.js"
import UserRepository from "../repository/userRepository.js"
import UserService from "../services/userService.js"

class UserRouter {
    private router: Router
    private controller: UserController

    constructor() {
        this.router = Router()

        const repository = new UserRepository()
        const service = new UserService(repository)
        const controller = new UserController(service)

        this.controller = controller
    }

    public init = () => {
        this.router.post("/user", this.controller.create)
        this.router.get("/users", this.controller.findAll)
    }

    public getRouter = () => {
        return this.router
    }
}

export default UserRouter