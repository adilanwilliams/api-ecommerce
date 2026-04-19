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
            ResponseHTTP.success(res, HttpStatus.CREATED, userCreated)

        } catch (error: any) {
            if (error instanceof ServiceError) {
                ResponseHTTP.error(res, HttpStatus.BAD_REQUEST, error.message)
                return
            }

            if (error instanceof Error) {
                ResponseHTTP.error(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message)
                return
            }
        }

    }

    public findAll = async (_: Request, res: Response) => {
        try {
            const users = await this.userService.findAll()
            ResponseHTTP.success(res, HttpStatus.OK, users)
        } catch (error: any) {
            if (error instanceof Error) {
                ResponseHTTP.error(res, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }

    public findById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const idNum = Number(id)
            const user = await this.userService.findById(idNum)

            ResponseHTTP.success(res, HttpStatus.OK, user)
        } catch (error: any) {
            if (error instanceof Error) {
                ResponseHTTP.error(res, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }

    public findByName = async (req: Request, res: Response) => {
        try {
            const { name } = req.params
            const users = await this.userService.findByName(String(name))

            ResponseHTTP.success(res, HttpStatus.OK, users)
        } catch (error: any) {
            if (error instanceof Error) {
                console.error(error.message)
                ResponseHTTP.error(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message)
            }
        }
    }

    public delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const idNum = Number(id)
            await this.userService.delete(idNum)

            ResponseHTTP.success(res, HttpStatus.OK)
        } catch (error: any) {
            if (error instanceof Error) {
                ResponseHTTP.error(res, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }

    public update = async (req: Request, res: Response) => {
        try {
            const body = req.body
            await this.userService.update(body)

            ResponseHTTP.success(res, HttpStatus.OK)
        } catch (error: any) {
            if (error instanceof Error) {
                ResponseHTTP.error(res, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }
}

export default UserController