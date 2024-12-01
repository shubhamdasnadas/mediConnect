import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./subComponent/Home";
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
    }
]);

export default appRouter;







