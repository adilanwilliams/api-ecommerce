import type { User } from "../generated/prisma/client.js";
import type UserRepository from "../repository/userRepository.js";


class UserService {
    private userRepository: UserRepository

    constructor(repository: UserRepository) {
        this.userRepository = repository
    }

    public create = async (user: User) => {
        await this.userRepository.create(user)

    }

    public findAll = async () => {
        return await this.userRepository.findAll()
    }
}

export default UserService