import React from "react";
import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";


const ApiTests = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const grabJobs = async () => {
      const response = await fetch(
        "https://www.arbeitnow.com/api/job-board-api"
      );
      const data = await response.json();
      console.log(data);
      setJobs(data.data);
    };
    grabJobs();
  }, []);

//   setTimeout(() => {
//     console.log(jobs.data);
//   }, 5000);

  return (
    <div>
      {jobs?.map((a) => (
        <ListGroup
          key={a.created_at}
          className="bg-light w-50 m-5 p-2 d-flex justify-center"
        >
          <div className="">
            <h2 className="">{a.title}</h2>{" "}
          </div>
        </ListGroup>
      ))}
    </div>
  );
};

export default ApiTests;
