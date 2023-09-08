import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPath = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <>
      <div className="m-4">
        <h1 className="text-3xl font-bold underline">Oopss!!</h1>
        <h2 className="text-3xl font-bold underline">
          Something went wrong..!!
        </h2>
        <h2 className="text-3xl font-bold underline">
          {status + " " + statusText}
        </h2>
      </div>
    </>
  );
};

export default ErrorPath;
