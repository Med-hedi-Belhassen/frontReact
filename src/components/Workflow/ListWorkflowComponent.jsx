import React, { useState, useEffect } from "react";
import WorkflowService from "../../services/WorkflowService";
import { Link } from "react-router-dom";
import WorkflowtasksComponent from "./WorkflowtasksComponent";
const ListWorkflowComponent = () => {
  const [workflows, setWorkflows] = useState([]);
  const [tasks, settasks] = useState([]);
  useEffect(() => {
    getWorkflows();
  }, []);
  const getTasks = (id) => {
    WorkflowService.getTasks(id)
      .then((response) => {
        if (Array.isArray(response.data)) {
          settasks(response.data);
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteWorkflow = (id) => {
    console.log(id);
    WorkflowService.deleteWorkflow(id)
      .then((response) => {
        console.log(response);
        getWorkflows();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getWorkflows = () => {
    WorkflowService.getAllWorkflows()
      .then((response) => {
        setWorkflows(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center"> List workflows </h2>
      <Link to="/add-workflow" className="btn btn-primary mb-2 ">
        {" "}
        Add workflow
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> workflow Id </th>
          <th> workflow Name </th>
          <th> workflow description </th>
          <th> workflow status </th>
          <th>workflow tasks</th>
          <th> Actions </th>
        </thead>
        <tbody>
          {workflows.map((workflow) => (
            <tr key={workflow.id}>
              <td> {workflow.id} </td>
              <td> {workflow.name_w} </td>
              <td>{workflow.description_w}</td>
              <td>{workflow.status_w}</td>
              <td></td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-workflow/${workflow.id}`}
                >
                  update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteWorkflow(workflow.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListWorkflowComponent;
