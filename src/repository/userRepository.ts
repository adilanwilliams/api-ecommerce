import Database from "../database/database.js";
import type { User } from "../generated/prisma/client.js";

class UserRepository {
    private database: Database

    constructor() {
        this.database = new Database()
    }

    public create = async (_user: User): Promise<boolean> => {
        const prisma = this.database.getPrisma()
        try{
            const userCreated = await prisma.user.create({
                data: _user
            })

            if (userCreated) return true
        }catch(error: any) {
            return false
        }

       return true
        
    }

    public findAll = async () => {
        const prisma = this.database.getPrisma()
        const users = await prisma.user.findMany()
        return users
    }

    public findById = async () => {

    }
}

export default UserRepository;