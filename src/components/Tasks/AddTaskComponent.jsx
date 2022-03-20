import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import TaskService from "../../services/TaskService";

const AddTaskComponent = () => {
  const [nameT, setnameT] = useState("");
  const [descriptionT, setdescriptionT] = useState();
  const [typeT, settypeT] = useState("");
  const [dureeT, setdureeT] = useState("");
  const [messageT, setmessageT] = useState("");
  const [etatT, setetatT] = useState(0);
  const [idWorkflow, setidWorkflow] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const SaveOrUpdateTask = (e) => {
    e.preventDefault();
    const task = {
      nameT,
    };
    console.log(task);
    if (id) {
      TaskService.updateTask(id, task)
        .then((response) => {
          console.log(response.data);
          navigate("/tasks");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      TaskService.createTask(id, task)
        .then((response) => {
          console.log(response.data);
          navigate("/tasks");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    TaskService.getTaskByid(id)
      .then((response) => {
        console.log(response.data);
        setdescriptionT(response.data.decription_t);
        setdureeT(response.data.duree_t);
        setnameT(response.data.nom_t);
        setmessageT(response.data.message_t);
        settypeT(response.data.type_t);
        setidWorkflow(response.data.id_workflow);
        setetatT(response.data.etat_t);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Tasks</h2>;
    } else {
      return <h2 className="text-center">Add Task</h2>;
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
                  <label className="form-label">task Name</label>
                  <input
                    type="text"
                    placeholder=" enter Task name"
                    name="nameT"
                    className="form-control"
                    value={nameT}
                    onChange={(e) => setnameT(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Task description</label>
                  <input
                    type="text"
                    placeholder=" enter task description"
                    name="descriptionT"
                    className="form-control"
                    value={descriptionT}
                    onChange={(e) => setdescriptionT(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">task type</label>
                  <input
                    type="text"
                    placeholder=" enter task type"
                    name="typeT"
                    className="form-control"
                    value={typeT}
                    onChange={(e) => settypeT(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">task duree</label>
                  <input
                    type="text"
                    placeholder=" enter task duree"
                    name="dureeT"
                    className="form-control"
                    value={dureeT}
                    onChange={(e) => setdureeT(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">task message</label>
                  <input
                    type="text"
                    placeholder=" enter task messageT"
                    name="messageT"
                    className="form-control"
                    value={messageT}
                    onChange={(e) => setmessageT(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">task etat</label>
                  <input
                    type="text"
                    placeholder=" enter task etat"
                    name="etatT"
                    className="form-control"
                    value={etatT}
                    onChange={(e) => setetatT(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">idWorkflow</label>
                  <input
                    type="text"
                    placeholder=" enter idWorkflow"
                    name="idWorkflow"
                    className="form-control"
                    value={idWorkflow}
                    onChange={(e) => setidWorkflow(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => SaveOrUpdateTask(e)}
                >
                  submit
                </button>
                <Link to="/tasks" className="btn btn-danger">
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

export default AddTaskComponent;
