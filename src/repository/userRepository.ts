
import Database from "../database/database.js";
import type { PrismaClient, User } from "../generated/prisma/client.js";

class UserRepository {
    private database: Database
    private prisma: PrismaClient

    constructor() {
        this.database = new Database()
        this.prisma = this.database.getPrisma()
    }

    public create = async (_user: User) => {
        await this.prisma.user.create({
            data: _user
        })
    }


    public findAll = async () => {
        const users = await this.prisma.user.findMany()
        return users
    }

    public findById = async (id: number) => {
        const user = await this.prisma.user.findUnique({
            where: {
                id
            }
        })

        return user
    }

    public update = async (_user: User) => {
        await this.prisma.user.update({
            data: _user,
            where: {
                id: _user.id
            }
        })
    }

    public delete = async (id: number) => {
        await this.prisma.user.delete({
            where: {
                id
            }
        })
    }

    public findByName = async (name: string) => {
        const users = await this.prisma.user.findMany({
            where: {
                name
            }
        })

        return users
    }

}

export default UserRepository;