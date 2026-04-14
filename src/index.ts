import UserRouter from "./routes/userRouter.js";
import Server from "./server.js";

const server = new Server()
const userRouter = new UserRouter()
userRouter.init()

server.addRouter(userRouter.getRouter())
server.run()