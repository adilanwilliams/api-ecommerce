import type { Request, Response } from "express"
import type UserService from "../services/userService.js"
import { ServiceError } from "../utils/errors.js"
import { HttpStatus, ResponseHTTP } from "../utils/http.js"

class UserController {
    private userService: UserService

    constructor(service: UserService) {
        this.userService = service
    }

    public create = async (req: Request, res: Response) => {
        const body = req.body
        try {
            const userCreated = await this.userService.create(body)
            ResponseHTTP.json(res, HttpStatus.CREATED, "user created", userCreated)

        } catch (error: any) {
            if (error instanceof ServiceError) {
                ResponseHTTP.json(res, HttpStatus.BAD_REQUEST, error.message)
            }
        }

    }

    public findAll = async (req: Request, res: Response) => {
        const users = await this.userService.findAll()

        res.status(200).json({
            success: true,
            message: "user created succesfully",
            data: users,
        })
    }
}

export default UserController