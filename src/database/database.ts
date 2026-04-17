import { PrismaPg } from "@prisma/adapter-pg";
import fs from "fs";
import path from "path";
import { PrismaClient } from "../generated/prisma/client.js";
import type { User } from "../generated/prisma/browser.js";

class Database {
    private filePath = path.resolve("src/data/data.json");
    private prisma: PrismaClient

    constructor() {
        const connectionString = `${process.env.DATABASE_URL}`
        const adapter = new PrismaPg(connectionString)

        this.prisma = new PrismaClient({ adapter })

    
    }

    public getPrisma = () => {
        return this.prisma
    }

    public find = (): User[] => {
        const data = fs.readFileSync(this.filePath, "utf-8");
        return JSON.parse(data);
    }

    public save = (data: User[]) => {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }
}

export default Database