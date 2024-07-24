import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions 
  // baseURL: "http://127.0.0.1:5001/clone-a65aa/us-central1/api",
  // deployed version of firebase functions 
  baseURL: "https://api-37su5z6zha-uc.a.run.app",
  // deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-zh8p.onrender.com",
});

export {axiosInstance}