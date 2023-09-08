import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Trailer from "./Trailer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPath from "./ErrorPath";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPath />,
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <ErrorPath />,
    },
    {
      path: "/browse/:id/trailer",
      element: <Trailer />,
      errorElement: <ErrorPath />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
