import type UserModel from "../models/userModel.js";
import type UserRepository from "../repository/userRepository.js";

class UserService {
    private userRepository: UserRepository

    constructor(repository: UserRepository) {
        this.userRepository = repository
    }
    

    public create(user: UserModel) {
        this.userRepository.create(user)
    }

    public findAll() {
        return this.userRepository.findAll()
    }
}

export default UserService