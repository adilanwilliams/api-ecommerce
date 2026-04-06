import UserController from "./controllers/userController.js";
import UserRepository from "./repository/userRepository.js";
import UserRouter from "./routes/userRouter.js";
import Server from "./server.js";
import UserService from "./services/userService.js";

const server = new Server()
const router = server.getRouter()

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

const routes = new UserRouter(router, userController)
routes.init()

server.init()
server.run()