import axios from "axios";

const WORKFLOW_BASE_REST_API_URL = "http://127.0.0.1:8000/workflow";
class WorkflowService {
  getAllWorkflows() {
    return axios.get(WORKFLOW_BASE_REST_API_URL + "/get");
  }
  createWorkflow(workflow) {
    return axios.post(WORKFLOW_BASE_REST_API_URL + "/add", workflow);
  }
  getWorkflowByid(id) {
    return axios.get(WORKFLOW_BASE_REST_API_URL + "/get/" + id);
  }
  updateWorkflow(id, workflow) {
    return axios.post(WORKFLOW_BASE_REST_API_URL + "/edit/" + id, workflow);
  }
  deleteWorkflow(id) {
    return axios.delete(WORKFLOW_BASE_REST_API_URL + "/remove/" + id);
  }
}
export default new WorkflowService();
