export class ServiceError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class RepositoryError extends Error {
    constructor(message: string) {
        super(message)
    }
}