import { createBrowserRouter,} from "react-router-dom";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Layout from "../Layouts/Layout";

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement : <Error></Error>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      }
    ]
  },
]);

export default myRouter;