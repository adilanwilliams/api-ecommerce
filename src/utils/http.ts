import type { Response } from "express"

export enum HttpStatus {
    // Informational
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,

    // Success
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,

    // Redirection
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    NOT_MODIFIED = 304,

    // Client Errors
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 422,

    // Server Errors
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
}

export class ResponseHTTP {
    private static json = (res: Response, code: HttpStatus, success: boolean, data?: any) => {
        res.status(code).json({
            success: success,
            data: data
        })
    }

    static success = (res: Response, code: HttpStatus, data?: any) => {
        this.json(res, code, true, data)
    }

    static error = (res: Response, code: HttpStatus, data?: any) => {
        this.json(res, code, false, data)
    }
}
