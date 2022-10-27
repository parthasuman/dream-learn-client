import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummary from "../CourseSummary/CourseSummary";

const AllCourse = () => {
  const coursetutorials = useLoaderData();

  return (
    <div>
      {coursetutorials.map((tutorial) => (
        <CourseSummary key={tutorial._id} tutorial={tutorial}></CourseSummary>
      ))}
    </div>
  );
};

export default AllCourse;
