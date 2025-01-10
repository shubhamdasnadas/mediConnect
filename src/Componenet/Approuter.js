import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./subComponent/Home";
import CreateRoom from "./subComponent/CreateRoom";
import VideoChat from "./subComponent/VideChat";
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    // {
    //     path: "/create-room",  // Route for creating a room
    //     element: <CreateRoom />,
    // },
    {
        path: "/room/:roomId", // Dynamic route for video chat in specific room
        element: <VideoChat />,
    },
]);

export default appRouter;







