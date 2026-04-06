import type UserModel from "../models/userModel.js";

class UserRepository {
    private users: UserModel[] = [];

    constructor() {

    }

    public create(user: UserModel) {
        this.users.push(user)
    }

      public findAll() {
        return this.users
    }
}

export default UserRepository