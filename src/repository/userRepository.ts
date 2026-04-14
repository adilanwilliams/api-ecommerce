import type UserModel from "../models/userModel.js";
import Database from "../database/database.js";

class UserRepository {
    private database: Database

    constructor() {
        this.database = new Database()
    }


    public create = (user: UserModel) => {
        const users = this.database.find();
        users.push(user);
        this.database.save(users);
    }

    public findAll = () => {
        return this.database.find();
    }
}

export default UserRepository;