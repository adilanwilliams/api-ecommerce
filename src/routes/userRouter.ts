import type { Router } from "express";
import type UserController from "../controllers/userController.js";

class UserRouter {
    private router: Router;
    private controller: UserController

    constructor(router: Router, controller: UserController) {
        this.router = router
        this.controller = controller
    }

    public init() {
        this.router.post("/user", this.controller.create)
        this.router.get("/users", this.controller.findAll)
    }

    public getRouter() {
        return  this.router
    }
}

export default UserRouter