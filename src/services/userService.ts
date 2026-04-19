import type { User } from "../generated/prisma/client.js";
import type UserRepository from "../repository/userRepository.js";
import { ServiceError } from "../utils/errors.js";


class UserService {
    private userRepository: UserRepository

    constructor(repository: UserRepository) {
        this.userRepository = repository
    }

    private verify(user: User) {
        if (!user.name) {
            throw new ServiceError("name is required")
        }

        if (!user.email) {
            throw new ServiceError("email is required")
        }

        if (!user.password) {
            throw new ServiceError("password is required")
        }

    }

    public create = async (user: User): Promise<void> => {
        this.verify(user)
        return await this.userRepository.create(user)
    }

    public findAll = async (): Promise<User[]> => {
        return await this.userRepository.findAll()
    }

    public findById = async (id: number): Promise<User | null> => {
        return await this.userRepository.findById(id)
    }

    public findByName = async (name: string): Promise<User[]> => {
        return await this.userRepository.findByName(name)
    }

    public delete = async (id: number): Promise<void> => {
        return await this.userRepository.delete(id)
    }

    public update = async (user: User): Promise<void> => {
        this.verify(user)
        return await this.userRepository.update(user)
    }

}

export default UserService