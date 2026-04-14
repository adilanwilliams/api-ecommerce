import fs from "fs";
import path from "path";
import type UserModel from "../models/userModel.js";


class Database {
    private filePath = path.resolve("src/data/data.json");

    public find = (): UserModel[] => {
        const data = fs.readFileSync(this.filePath, "utf-8");
        return JSON.parse(data);
    }

    public save = (data: UserModel[]) => {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }
}

export default Database