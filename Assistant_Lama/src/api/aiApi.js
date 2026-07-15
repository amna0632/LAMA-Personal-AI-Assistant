import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const sendCommand = async (command) => {
  const { data } = await api.post("/ai/chat", {
    message: command,
  });

  return data;
};

export default api;