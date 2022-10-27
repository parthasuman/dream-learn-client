import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p className="text-center">
        Please Go Back <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
