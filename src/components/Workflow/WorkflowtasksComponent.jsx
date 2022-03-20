import React, { useState, useEffect } from "react";
import WorkflowService from "../../services/WorkflowService";
const WorkflowtasksComponent = (id) => {
  const [tasks, settasks] = useState([]);
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
  useEffect(() => {
    getTasks(id);
  }, []);

  return (
    <select name="tasks">
      {tasks.map((t) => (
        <option key={t.id} value={t.nom_t}>
          {t.nom_t}
        </option>
      ))}
    </select>
  );
};

export default WorkflowtasksComponent;
