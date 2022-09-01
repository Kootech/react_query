import axios from "axios";

const uri = "https://jsonplaceholder.typicode.com/todos";

export const apiRequest = async () => {
  const response = await axios.get(uri);
  return response.data;
};
