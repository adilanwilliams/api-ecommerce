import type { Request, Response } from "express"
import type UserModel from "../models/userModel.js"
import type UserService from "../services/userService.js"

class UserController {
    private userService: UserService

    constructor(service: UserService) {
        this.userService = service
    }

    async create(req: Request, res: Response) {
        const body = req.body as UserModel

        const userCreated = this.userService.create(body)

        res.status(200).json({
            success: true,
            message: "user created succesfully",
            data: userCreated,
        })
    }

    async findAll(req: Request, res: Response) {
        const users = this.userService.findAll()

        res.status(200).json({
            success: true,
            message: "user created succesfully",
            data: users,
        })
    }
}

export default UserController