import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import AuthWorkFlow from "./AuthWorkFlow";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AuthWorkFlow />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
