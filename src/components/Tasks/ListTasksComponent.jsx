import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskService from "../../services/TaskService";
const ListTasksComponent = () => {
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    getTasks();
    console.log(tasks);
  }, []);
  const getTasks = () => {
    TaskService.getAllTasks()
      .then((response) => {
        console.log(response.data);
        settasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteTask = (id) => {
    TaskService.deleteTask(id)
      .then((response) => {
        console.log(response);
        getTasks();
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h2 className="text-center"> List tasks </h2>
      <Link to="/add-task" className="btn btn-primary mb-2 ">
        {" "}
        Add task
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> task Id </th>
          <th> task Name </th>
          <th> task description </th>
          <th> task type </th>
          <th> task duree </th>
          <th> task message </th>
          <th> task etat </th>
          <th> id workflow </th>
          <th>Actions</th>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.nom_t}</td>
              <td>{task.decription_t}</td>
              <td>{task.type_t}</td>
              <td>{task.duree_t}</td>
              <td>{task.message_t}</td>
              <td>{task.etat_t}</td>
              <td>{task.id_workflow}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-task/${task.id}`}>
                  update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task.id)}
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

export default ListTasksComponent;
