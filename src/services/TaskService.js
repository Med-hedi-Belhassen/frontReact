import axios from "axios";

const TASK_BASE_REST_API_URL = "http://127.0.0.1:8000/task";
class TaskService {
  getAllTasks() {
    return axios.get(TASK_BASE_REST_API_URL + "/get");
  }
  createTask(task) {
    return axios.post(TASK_BASE_REST_API_URL + "/add", task);
  }
  getTaskByid(id) {
    return axios.get(TASK_BASE_REST_API_URL + "/get/" + id);
  }
  updateTask(id, task) {
    return axios.put(TASK_BASE_REST_API_URL + "/edit/" + id, task);
  }
  deleteTask(id) {
    return axios.delete(TASK_BASE_REST_API_URL + "/remove/" + id);
  }
}
export default new TaskService();
