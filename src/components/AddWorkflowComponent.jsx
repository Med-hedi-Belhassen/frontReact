import React, { useState, useEffect } from "react";
import WorkflowService from "../services/WorkflowService";
import { useNavigate, Link, useParams } from "react-router-dom";
const AddWorkflowComponent = () => {
  const [nameW, setnameW] = useState("");
  const [descriptionW, setdescriptionW] = useState("");
  const [statusW, setstatusW] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const SaveOrUpdateWorkflow = (e) => {
    e.preventDefault();
    const workflow = { nameW, descriptionW, statusW };
    console.log(workflow);
    if (id) {
      WorkflowService.updateWorkflow(id, workflow)
        .then((response) => {
          navigate("/workflows");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      WorkflowService.createWorkflow(workflow)
        .then((response) => {
          console.log(response.data);
          navigate("/workflows");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    WorkflowService.getWorkflowByid(id)
      .then((response) => {
        console.log(response);
        setnameW(response.data.name_w);
        setstatusW(response.data.status_w);
        setdescriptionW(response.data.description_w);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update workflow</h2>;
    } else {
      return <h2 className="text-center">Add workflow</h2>;
    }
  };
  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Workflow Name</label>
                  <input
                    type="text"
                    placeholder=" enter workflow name"
                    name="namew"
                    className="form-control"
                    value={nameW}
                    onChange={(e) => setnameW(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Workflow description</label>
                  <input
                    type="text"
                    placeholder=" enter workflow description"
                    name="descriptionW"
                    className="form-control"
                    value={descriptionW}
                    onChange={(e) => setdescriptionW(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Workflow status</label>
                  <input
                    type="text"
                    placeholder=" enter workflow status"
                    name="statusW"
                    className="form-control"
                    value={statusW}
                    onChange={(e) => setstatusW(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => SaveOrUpdateWorkflow(e)}
                >
                  submit
                </button>
                <Link to="/workflows" className="btn btn-danger">
                  cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWorkflowComponent;
